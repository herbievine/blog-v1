import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryNotFound from '../../components/errors/CategoryNotFound'
import DefaultWrapper from '../../components/layout/DefaultWrapper'
import Navigation from '../../components/modules/Navigation'
import SearchedPost, { Post } from '../../components/posts/SearchedPost'
import { useFindByCategoryQuery } from '../../generated/graphql'
import withApollo from '../../lib/withApollo'

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
        <div className="w-full mt-24 flex flex-col justify-start items-center">
          <h1 className=" text-lg text-gray-700 capitalize">
            {router.query.label}
          </h1>

          <div className="w-full mt-6 flex flex-col justify-start items-center">
            {loading ? (
              <p>loading...</p>
            ) : (
              <>
                {data.posts?.length > 0 ? (
                  <>
                    {[...data.posts].map((post, index) => (
                      <SearchedPost key={index} post={post as Post} />
                    ))}
                  </>
                ) : (
                  <CategoryNotFound />
                )}
              </>
            )}
          </div>
        </div>
      </DefaultWrapper>
    </>
  )
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'index'])),
//   },
// })

export default withApollo({ ssr: true })(Category)
