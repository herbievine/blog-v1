import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import PostNotFound from '../../components/errors/PostNotFound'
import DefaultWrapper from '../../components/layout/DefaultWrapper'
import Navigation from '../../components/modules/Navigation'
import {
  useFindOneBySlugQuery,
  useIncrementViewMutation,
} from '../../generated/graphql'
import withApollo from '../../lib/withApollo'
import gfm from 'remark-gfm'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const router = useRouter()
  const { data, loading } = useFindOneBySlugQuery({
    variables: { slug: router.query.slug as string },
  })
  const [incrementViews] = useIncrementViewMutation()

  useEffect(() => {
    if (!loading) {
      incrementViews({
        variables: {
          id: data?.posts[0]?.id,
          views: data?.posts[0]?.views + 1,
        },
      })
    }
  }, [loading])

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        {!loading && data?.posts[0] ? (
          <div className="w-full mt-24 flex flex-col justify-start items-center">
            <h1 className="text-lg text-gray-700 capitalize">
              {data.posts[0].title}
            </h1>

            <div className="w-full py-4 px-6 rounded-lg shadow-md mt-6 flex flex-col justify-start items-start">
              <ReactMarkdown remarkPlugins={[gfm]} className="default">
                {data.posts[0].content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <PostNotFound />
        )}
      </DefaultWrapper>
    </>
  )
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'index'])),
//   },
// })

export default withApollo({ ssr: true })(Post)
