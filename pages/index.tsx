import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import Navigation from '../components/modules/Navigation'
import TopCategories from '../components/modules/TopCategories'
import ListPosts from '../components/posts/ListPosts'
import PopularPosts from '../components/posts/PopularPosts'
import { useFindLatestQuery } from '../generated/graphql'
import withApollo from '../lib/withApollo'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const { data, loading } = useFindLatestQuery()

  return (
    <>
      <Navigation />
      <div className="mt-24 w-5/6 mx-auto flex items-start">
        <div className="w-full flex justify-between items-start">
          <ListPosts className="md:w-4/6 w-full" />
          <div className="hidden sticky ml-12 w-2/6 md:flex flex-col">
            <TopCategories className="w-full" />
            <PopularPosts className="mt-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo({ ssr: false })(Index)
