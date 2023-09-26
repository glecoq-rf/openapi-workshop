import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient("https://openapi.radiofrance.fr/v1/graphql", {
  headers: {
    "x-token": 'your-token-here',
  },
})

export default client;