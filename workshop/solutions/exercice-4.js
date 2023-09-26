import { gql } from "graphql-request"
import client from "./client.js"


const query = gql`
 # Put your query here
 {
  grid(
    start: 1688432400
    end: 1688433300
    station: FRANCEINTER
    includeTracks: true
  ) {
    ... on DiffusionStep {
      id
      diffusion {
        id
        title
        standFirst
        show {
          id
          title
          standFirst
        }
      }
    }
    ... on TrackStep {
      id
      track {
        id
        title
        performers
        authors
        trackNumber
      }
    }
    ... on BlankStep {
      id
      title
    }
  }
}
`

export const getGrid = async () => {
  /**
   * Put your code here
   */
  let {grid} = await client.request(query);
  return grid;
}