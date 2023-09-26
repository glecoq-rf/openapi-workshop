import { gql } from "graphql-request"
import client from './client.js'


const query = gql`
 # Put your query here
 {
  showByUrl(url: "https://www.radiofrance.fr/franceculture/podcasts/la-science-cqfd") {
    id,
    title,
    standFirst
  }
}
`

export const getScienceCQFD = async () => {
  /**
   * Put your code here
   */

  const {showByUrl} = await client.request(query);

  return showByUrl;
}