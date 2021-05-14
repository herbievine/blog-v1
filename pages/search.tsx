import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import withApollo from '../utils/withApollo'
import {
  useFindLivePostsByTitleQuery,
  useFindLivePostsByUserQuery,
  useFindLivePostsByCategoryQuery,
  useFindByCategoryQuery,
} from '../generated/graphql'

interface SearchProps {}

type Filter = 'title' | 'author' | 'category'

const Search: React.FC<SearchProps> = ({}) => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<Filter>('title')
  const { data, loading } = router.query?.post
    ? filter === 'title'
      ? useFindLivePostsByTitleQuery({
          variables: { title: search },
        })
      : filter === 'author'
      ? useFindLivePostsByUserQuery({
          variables: { user: search },
        })
      : useFindLivePostsByCategoryQuery({
          variables: { category: search },
        })
    : useFindByCategoryQuery({
        variables: { category: search },
      })
  const filters = ['title', 'author', 'category']

  useEffect(() => {
    const { query } = router

    if (!query.post && !query.category) {
      router.replace('/')
    }

    setSearch(query.post ? (query.post as string) : (query.category as string))
  }, [router])

  return (
    <div className="mt-24 flex flex-col justify-start items-center">
      <h3 className="font-bold text-lg text-gray-700">
        Searching for '{search}'
      </h3>
      <div className="mt-4 w-96 flex justify-evenly items-center">
        {[...filters].map((filter: Filter, index) => (
          <div
            onClick={() => setFilter(filter)}
            key={index}
            className="py-1 px-3 rounded-full border border-gray-200"
          >
            <p className="text-xs font-bold uppercase text-gray-700">
              {filter}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col justify-start items-center">
        {!loading && data.posts && (
          <>
            {[...data.posts].map((post, index) => (
              <div
                key={index}
                className={`w-96 py-4 px-6 rounded-lg border border-gray-200 ${
                  data.posts.length - 1 !== index && 'mb-4'
                }`}
              >
                <p>Title: {post.title}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default withApollo({ ssr: true })(Search)
