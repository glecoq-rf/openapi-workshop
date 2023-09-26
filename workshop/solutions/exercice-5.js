import { gql } from "graphql-request"
import client from './client'


const query = gql`
 # Put your query here
 query($after: String) {
  paginatedGrid(
    start: 1688421600
    end: 1688507999
    station: FRANCEMUSIQUE
    includeTracks: true,
    after: $after
  ) {
    cursor
    node {
      steps {
        id
      }
    }
  }
}

`
export const getPaginatedGrid = async () => {
  /**
   * Put your code here
   */
  let hasCursor = true;
  let after = null;
  let ids = []
  while (hasCursor) {
     const {paginatedGrid: {cursor, node: {steps}}} = await client.request(query, {
      after 
    })

    ids = [...ids, ...(steps.map(s => s.id))]
    hasCursor = cursor !== null;
    after = cursor
  }

  return ids;
}