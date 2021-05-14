import Head from 'next/Head'
import React from 'react'
import withApollo from '../utils/withApollo'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        <p>Hello!</p>
      </div>
    </>
  )
}

export default withApollo({ ssr: false })(Index)
