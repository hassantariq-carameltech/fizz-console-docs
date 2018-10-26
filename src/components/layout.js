import React from "react"
import { StaticQuery } from "gatsby"
import Header from './header'

const query = graphql`
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <Header allMarkdownRemark={data.allMarkdownRemark} />
        {children}
      </div>
    )}
    />
)