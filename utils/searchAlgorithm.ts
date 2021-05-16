import { useEffect, useState } from 'react'
import {
  useFindLivePostsByCategoryQuery,
  useFindLivePostsByTitleQuery,
  useFindLivePostsByUserQuery,
} from '../generated/graphql'
import type { Filter } from '../pages/search'

const processAllSearch = (search: string) => {
  const { data: titleData, loading: titleLoading } =
    useFindLivePostsByTitleQuery({
      variables: { title: search },
    })

  const { data: userData, loading: userLoading } = useFindLivePostsByUserQuery({
    variables: { user: search },
  })

  const { data: categoryData, loading: categoryLoading } =
    useFindLivePostsByCategoryQuery({
      variables: { category: search },
    })

  if (
    titleLoading &&
    titleData?.posts &&
    userLoading &&
    userData?.posts &&
    categoryLoading &&
    categoryData?.posts
  ) {
    return {
      data:
        [...titleData?.posts, ...userData?.posts, ...categoryData?.posts] ??
        null,
      loading: false,
    }
  }
}

const searchAlgorithm = (parentSearch: string, parentFilter?: Filter) => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setSearch(parentSearch)
    setFilter(parentFilter)
  }, [parentSearch, parentFilter])

  const { data, loading } = !filter
    ? processAllSearch(search)
    : filter === 'title'
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

  return { data, loading }
}

export default searchAlgorithm
