import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import IndexLayout from '../components/layout/IndexLayout'
import Navigation from '../components/modules/Navigation'
import { useFindLatestQuery } from '../generated/graphql'
import withApollo from '../utils/withApollo'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const { data, loading } = useFindLatestQuery()

  return (
    <>
      <Navigation />
      <div className="mt-24 w-5/6 mx-auto flex items-start">
        <IndexLayout />
      </div>
    </>
  )
}

export default withApollo({ ssr: false })(Index)
