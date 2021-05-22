import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import withApollo from '../utils/withApollo'
import {
  useFindLivePostsByTitleQuery,
  useFindLivePostsByUserQuery,
  useFindLivePostsByCategoryQuery,
} from '../generated/graphql'
import SearchNotFound from '../components/errors/SearchNotFound'
import SearchedPost from '../components/posts/SearchedPost'
import DefaultWrapper from '../components/layout/DefaultWrapper'
import Navigation from '../components/modules/Navigation'

interface SearchProps {}

export type Filter = 'title' | 'author' | 'category'

const Search: React.FC<SearchProps> = ({}) => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<Filter>('title')
  const filters = ['title', 'category', 'author']
  const { data, loading } =
    filter === 'title'
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

  useEffect(() => {
    const { query } = router

    if (!query.q) {
      router.replace('/')
    }

    setSearch(query.q as string)
  }, [router])

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        {search && (
          <div className="w-full mt-24 flex flex-col justify-start items-center">
            <h3 className="font-bold text-lg text-gray-700">
              Searching for '{search}'
            </h3>
            <div className="mt-4 flex justify-start items-center">
              {[...filters].map((filterOption: Filter, index) => (
                <div
                  data-cy={`filter-${filterOption}`}
                  onClick={() => setFilter(filterOption)}
                  key={index}
                  className={`py-1 px-3 rounded-full border-2 cursor-pointer ${
                    filter === filterOption
                      ? 'border-gray-700'
                      : 'border-gray-200'
                  } ${filters.length - 1 !== index && 'mr-4'}`}
                >
                  <p className="text-xs font-bold uppercase text-gray-700">
                    {filterOption}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mt-6 flex flex-col justify-start items-center">
              {loading ? (
                <p>loading...</p>
              ) : (
                <>
                  {data?.posts?.length > 0 ? (
                    <>
                      {[...data.posts].map((post, index) => (
                        <SearchedPost key={index} post={post} />
                      ))}
                    </>
                  ) : (
                    <SearchNotFound />
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </DefaultWrapper>
    </>
  )
}

export default withApollo({ ssr: true })(Search)
