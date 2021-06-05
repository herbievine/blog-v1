import { useRouter } from 'next/router'
import React from 'react'
import CategoryNotFound from '@/components/errors/CategoryNotFound'
import DefaultWrapper from '@/components/layout/DefaultWrapper'
import Navigation from '@/components/modules/Navigation'
import SearchedPost, { Post } from '@/components/posts/SearchedPost'
import {
  Category as Categories,
  Posts,
  useFindByCategoryQuery,
} from '@/generated/graphql'
import withApollo, { apolloClient } from '@/lib/withApollo'
import { FIND_ALL_CATEGORIES, FIND_POST_BY_CATEGORY } from 'graphql/static'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface CategoryProps {
  posts: Posts[]
}

const Category: React.FC<CategoryProps> = ({ posts }) => {
  const router = useRouter()

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        <div className="w-full">
          <div className="w-full flex justify-center capitalize">
            <h1>{router.query.label}</h1>
          </div>
          {posts?.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {[...posts].map((post, index) => (
                <SearchedPost key={index} post={post as unknown as Post} />
              ))}
            </div>
          ) : (
            <CategoryNotFound />
          )}
        </div>
      </DefaultWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const {
    data,
  }: {
    data: {
      posts: Array<Posts>
    }
  } = await apolloClient.query({
    query: FIND_POST_BY_CATEGORY,
    variables: {
      category: params.label,
    },
  })

  return {
    props: {
      posts: data.posts,
      ...(await serverSideTranslations(locale, ['common', 'post-[slug]'])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { data }: { data: { categories: Array<Categories> } } =
    await apolloClient.query({
      query: FIND_ALL_CATEGORIES,
    })

  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...data.categories.map(({ label }) => ({
        params: {
          label,
        },
        locale: next,
      })),
    ],
    []
  )

  return {
    paths,
    fallback: false,
  }
}

export default withApollo({ ssr: false })(Category)
