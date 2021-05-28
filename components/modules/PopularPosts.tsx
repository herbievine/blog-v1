import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useFindLatestQuery } from '../../generated/graphql'

interface PopularPostsProps {
  className?: string
}

const PopularPosts: React.FC<PopularPostsProps> = ({ className }) => {
  const { data, loading } = useFindLatestQuery()
  const router = useRouter()

  return (
    <div
      className={`${className} p-6 rounded-lg flex flex-col dark:bg-gray-800 shadow-md`}
    >
      <h2>Popular posts</h2>
      <div className="mt-2 h-px w-full px-6 bg-gray-800 dark:bg-gray-100"></div>
      <div className="mt-4 flex flex-col items-start">
        {!loading && data?.posts?.length > 0 ? (
          <>
            {[...data.posts].map((post, index) => (
              <div
                key={index}
                className={index !== data.posts.length - 1 && 'mb-2'}
              >
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default PopularPosts
