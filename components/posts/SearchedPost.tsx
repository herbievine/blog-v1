import React from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import processBrightness from '../../lib/processBrightness'

export type Post = {
  id: string
  title?: string
  slug?: string
  content?: string
  views?: number
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

interface SearchedPostProps {
  post: Post
}

const SearchedPost: React.FC<SearchedPostProps> = ({ post }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/post/${post.slug}`)}
      className="w-full py-4 px-6 rounded-lg flex flex-col bg-gray-100 dark:bg-gray-800 mb-4 cursor-pointer transform transition hover:scale-105"
    >
      <span className="text-xs font-medium">
        {post.user.displayName} ·{' '}
        {dayjs(post.created_at).format('DD/MM/YYYY @ HH:mm')}
      </span>
      <h4 className="mt-2 text-lg">{post.title}</h4>
      <div className="mt-2">
        <p className="text-sm font-medium truncate">{post.content}</p>
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
                className="text-xs"
                style={{
                  color:
                    parseFloat(
                      processBrightness(post?.categories[index]?.hexColor)
                    ) > 0.5
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
