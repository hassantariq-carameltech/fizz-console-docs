
import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ allMarkdownRemark }) => {
  // console.log("---> here: ", data)
  return (
    <header style={{ marginBottom: `1.5rem` }}>  
      Fizz Header in layout with all the navigation
      <br/>
      <ListLink to='/'>Home</ListLink>
        {
          allMarkdownRemark.edges.map(({ node }) => (
            <ListLink key={node.id} to={node.fields.slug}>{node.frontmatter.title}</ListLink>
          ))
        }
    </header>
  )
}