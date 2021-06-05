import React, { useEffect } from 'react'
import PostNotFound from '@/components/errors/PostNotFound'
import DefaultWrapper from '@/components/layout/DefaultWrapper'
import Navigation from '@/components/modules/Navigation'
import {
  Posts,
  useFindOneBySlugQuery,
  useIncrementViewMutation,
} from '@/generated/graphql'
import withApollo, { apolloClient } from '@/lib/withApollo'
import gfm from 'remark-gfm'
import ImageRenderer from '@/components/markdown/ImageRenderer'
import dayjs from 'dayjs'
import ReactMarkdown from 'react-markdown'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ApolloError, gql } from '@apollo/client'
import { FIND_ALL_POSTS, FIND_POST_BY_SLUG } from 'graphql/static'

interface PostProps {
  post: Posts
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [incrementViews] = useIncrementViewMutation()
  const { t } = useTranslation('post-[slug]')

  useEffect(() => {
    if (post.id) {
      incrementViews({
        variables: {
          id: post.id,
          views: post.views ?? 0 + 1,
        },
      })
    }
  }, [])

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        {post.id ? (
          <div className="w-full flex flex-col justify-start items-start">
            <h1 className="text-4xl font-extrabold">{post.title}</h1>
            <span className="mt-3 text-xs font-medium">
              {t('written')} {post.user.displayName}{' '}
              {dayjs().to(dayjs(post.created_at))}
            </span>
            <article className="w-full mt-4 text-justify">
              <ReactMarkdown
                components={{
                  img: ({ node }) => <ImageRenderer node={node} />,
                }}
                remarkPlugins={[gfm]}
                className="default"
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        ) : (
          <PostNotFound />
        )}
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
    query: FIND_POST_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  })

  return {
    props: {
      post: data.posts[0],
      ...(await serverSideTranslations(locale, ['common', 'post-[slug]'])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { data }: { data: { posts: Array<{ slug: string }> } } =
    await apolloClient.query({
      query: FIND_ALL_POSTS,
    })

  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...data.posts.map(({ slug }) => ({
        params: {
          slug,
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

export default withApollo({ ssr: false })(Post)
