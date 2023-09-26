import { gql } from "graphql-request"
import client from "./client.js"


const query = gql`
 {
  brands {
    title
    webRadios {title}
    localRadios { title}
  }
}
`

export const getBrandsLocalWeb = async () => {
  /**
   * Put your code here
   */

  const {brands} = await client.request(query);

  return brands.reduce((acc, brand) => {
    acc.push(brand.title);
    acc.push(...(brand.localRadios?.map(r => r.title) ?? []))
    acc.push(...(brand.webRadios?.map(r => r.title) ?? []))
    return acc
  }, []);
}