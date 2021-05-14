import { useRouter } from 'next/router'
import React from 'react'
import PostNotFound from '../../components/errors/PostNotFound'
import { useFindOneBySlugQuery } from '../../generated/graphql'
import withApollo from '../../utils/withApollo'

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const router = useRouter()
  const { data, loading } = useFindOneBySlugQuery({
    variables: { slug: router.query.slug as string },
  })

  return (
    <div>
      {!loading && data?.posts[0] ? (
        <div>
          <h2 className="text-red-500">{data?.posts[0].title}</h2>
        </div>
      ) : (
        <div>
          <PostNotFound />
        </div>
      )}
    </div>
  )
}

export default withApollo({ ssr: true })(Post)
