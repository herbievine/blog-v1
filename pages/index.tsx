import React from 'react'
import Navigation from '../components/modules/Navigation'
import SearchedPost, { Post } from '../components/posts/SearchedPost'
import { useFindLatestQuery } from '../generated/graphql'
import withApollo from '../utils/withApollo'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const { data, loading } = useFindLatestQuery()

  return (
    <>
      <Navigation />
      <div className="mt-24 w-5/6 md:w-1/2 mx-auto flex items-start">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl font-bold">Latest Posts</h1>
          {!loading && data?.posts?.length > 0 ? (
            <div className="mt-6">
              {[...data.posts].map((post) => (
                <SearchedPost post={post as Post} />
              ))}
            </div>
          ) : (
            <p>Loading... :)</p>
          )}
        </div>
      </div>
    </>
  )
}

export default withApollo({ ssr: false })(Index)
