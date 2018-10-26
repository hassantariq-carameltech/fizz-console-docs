import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <div>{page.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`