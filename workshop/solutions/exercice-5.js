import { gql } from "graphql-request"
import client from './client'


const query = gql`
 # Put your query here
 {
  diffusions(station: FRANCEINTER, themes: ["25bced2b-e4a8-405c-986a-e0bd5a3fe54f_0"] ) {
    edges {
      cursor
      node {
        id
        title
        standFirst
        url
        published_date
        taxonomiesConnection {
          edges {
            node {
              id
              path
              title
            }
          }
        }
      }
    }
  }
}
`

export const getDiffusionsByTaxonomy = async () => {
  /**
   * Put your code here
   */
  let {diffusions} = await client.request(query);
  return diffusions;
}