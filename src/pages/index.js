import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <div>{data.datoCmsHome.heroTitle}</div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      heroTitle
    }
  }
`
