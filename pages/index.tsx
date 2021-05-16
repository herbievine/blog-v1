import React from 'react'
import Navigation from '../components/modules/Navigation'
import withApollo from '../utils/withApollo'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <>
      <Navigation />
      <div>
        <p>Hello!</p>
      </div>
    </>
  )
}

export default withApollo({ ssr: false })(Index)
