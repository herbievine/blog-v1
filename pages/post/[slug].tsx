import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PostNotFound from '../../components/errors/PostNotFound'
import DefaultWrapper from '../../components/layout/DefaultWrapper'
import Navigation from '../../components/modules/Navigation'
import { useFindOneBySlugQuery } from '../../generated/graphql'
import withApollo from '../../utils/withApollo'
import gfm from 'remark-gfm'

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const router = useRouter()
  const { data, loading } = useFindOneBySlugQuery({
    variables: { slug: router.query.slug as string },
  })

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        {!loading && data.posts[0] ? (
          <div className="w-full mt-24 flex flex-col justify-start items-center">
            <h3 className="font-bold text-lg text-gray-700 capitalize">
              {data.posts[0].title}
            </h3>

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

export default withApollo({ ssr: true })(Post)
