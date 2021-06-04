import { ArrowRightIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import { useFindPopularQuery } from '../../generated/graphql'

interface PopularPostsProps {
  className?: string
}

const PopularPosts: React.FC<PopularPostsProps> = ({ className }) => {
  const { data, loading } = useFindPopularQuery()
  const { t } = useTranslation('index')

  return (
    <div
      className={`${className} p-6 rounded-lg flex flex-col bg-gray-100 dark:bg-gray-800`}
    >
      <h2>{t('popular')}</h2>
      <div className="mt-2 h-px w-full px-6 bg-gray-800 dark:bg-gray-100"></div>
      <div className="mt-4 flex flex-col items-start">
        {!loading && data?.posts?.length > 0 ? (
          <>
            {[...data.posts].map((post, index) => (
              <div
                key={index}
                className={`text-sm flex items-center cursor-pointer ${
                  index !== data.posts.length - 1 && 'mb-2'
                }`}
              >
                <Link href={`/post/${post.slug}`}>
                  {`${post.title} (${post.views} views)`}
                </Link>
                <ArrowRightIcon className="ml-2 w-4" />
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
