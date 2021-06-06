import { withApollo } from 'next-apollo'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  cache: new InMemoryCache(),
})

export default withApollo(apolloClient)
