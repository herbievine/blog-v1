import { withApollo } from 'next-apollo'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: process.env.CIRCLECI
    ? process.env.NEXT_PUBLIC_TEST_API_URL
    : process.env.NEXT_PUBLIC_API_URL,
  // credentials: 'include',
  cache: new InMemoryCache(),
})

export default withApollo(apolloClient)
