import { ArrowRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import { useFindLatestQuery } from '../../generated/graphql'
import SearchedPost, { Post } from './SearchedPost'

interface ListPostsProps {
  className?: string
}

const ListPosts: React.FC<ListPostsProps> = ({ className }) => {
  const { data, loading } = useFindLatestQuery()
  const router = useRouter()

  return (
    <div className={`flex flex-col justify-start items-start ${className}`}>
      <h1 className="text-xl">Recently published</h1>
      {!loading && data?.posts?.length > 0 ? (
        <div className="mt-6 w-full">
          {[...data.posts].map((post, index) => (
            <SearchedPost key={index} post={post as Post} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div
        className="mt-4 flex items-center cursor-pointer transform transition hover:scale-105 text-sm"
        onClick={() => router.push('/latest')}
      >
        <p>See more posts</p>
        <ArrowRightIcon className="ml-2 w-4" />
      </div>
    </div>
  )
}

export default ListPosts
