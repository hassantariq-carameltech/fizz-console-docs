import React from "react"
import Layout from "../components/layout"
import { graphql, withPrefix } from "gatsby"
import _ from 'lodash'
// import image from '../pages/assets/GettingStarted/01.png' // Tell Webpack this JS file uses this image
// import { withPrefix } from 'gatsby'


function getFinalContent(html, meta) {
  var compiled = _.template(html);
  var finalContent = compiled(meta);
  finalContent = finalContent.replace(/<table/g, "<div class=\"table-container\"><table")
  finalContent = finalContent.replace(/<\/table>/g, "</table></div>");
  return finalContent;  
}



export default({ data }) => {
  // console.log("----> data is : ", data);
  const page = data.markdownRemark;
  const html = page.html;
  const meta = JSON.parse(data.site.siteMetadata.meta);
  const parsed = getFinalContent(html, meta);
  // console.log("---> Final Content", parsed);
  return (
    <Layout>
      {/* <div>{page.frontmatter.title}</div> */}
      {/* <img src={withPrefix('/11.png')} /> */}
      <div dangerouslySetInnerHTML={{ __html: parsed }} />
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
    site {
      siteMetadata {
        meta
      }
    }
  }
`