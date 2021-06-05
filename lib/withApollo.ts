import { withApollo } from 'next-apollo'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    fetch,
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  }),
  cache: new InMemoryCache(),
})

export default withApollo(apolloClient)
