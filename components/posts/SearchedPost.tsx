import React from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import processBrightness from '../../utils/processBrightness'

interface SearchedPostProps {
  post: {
    title?: string
    slug?: string
    content?: string
    created_at: string
    categories?: [
      {
        label?: string
        hexColor?: string
      }
    ]
    user?: {
      id: string
      username: string
      email: string
      displayName: string
    }
  }
}

const SearchedPost: React.FC<SearchedPostProps> = ({ post }) => {
  const router = useRouter()

  return (
    <div
      data-cy="post"
      onClick={() => router.push(`/post/${post.slug}`)}
      className="w-full py-4 px-6 rounded-lg shadow-md mb-4 cursor-pointer transform transition hover:scale-105"
    >
      <div className="flex justify-between items-baseline">
        <h4 className="text-lg font-bold text-gray-700">{post.title}</h4>
        <p className="text-xs font-medium text-gray-500">
          Published on {dayjs(post.created_at).format('DD/MM/YYYY @ HH:mm')} by{' '}
          {post.user.displayName}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-gray-700">
          {post.content.slice(0, 300)}...
        </p>
      </div>
      <div className="mt-2 w-full flex justify-start">
        {post.categories &&
          [...post.categories].map((category, index) => (
            <div
              key={index}
              className={`py-1 px-3 rounded-full border ${
                post.categories.length - 1 !== index && 'mr-4'
              }`}
              style={{
                borderColor: category.hexColor,
                background: category.hexColor,
              }}
            >
              <p
                className="text-xs font-bold text-gray-700"
                style={{
                  color:
                    processBrightness(post?.categories[index]?.hexColor) > 0.5
                      ? '#000000'
                      : '#ffffff',
                }}
              >
                {category.label}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchedPost
