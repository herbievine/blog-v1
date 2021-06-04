import { useRouter } from 'next/router'
import React from 'react'
import CategoryNotFound from '@/components/errors/CategoryNotFound'
import DefaultWrapper from '@/components/layout/DefaultWrapper'
import Navigation from '@/components/modules/Navigation'
import SearchedPost, { Post } from '@/components/posts/SearchedPost'
import { useFindByCategoryQuery } from '@/generated/graphql'
import withApollo from '@/lib/withApollo'

interface CategoryProps {}

const Category: React.FC<CategoryProps> = ({}) => {
  const router = useRouter()
  const { data, loading } = useFindByCategoryQuery({
    variables: { category: router.query.label as string },
  })

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        <div className="w-full">
          <div className="w-full flex justify-center capitalize">
            <h1>{router.query.label}</h1>
          </div>
          {!loading ? (
            <>
              {data?.posts?.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {[...data.posts].map((post, index) => (
                    <SearchedPost key={index} post={post as Post} />
                  ))}
                </div>
              ) : (
                <CategoryNotFound />
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </DefaultWrapper>
    </>
  )
}

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'post-[slug]'])),
//   },
// })

export default withApollo({ ssr: true })(Category)
