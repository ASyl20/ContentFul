import React from 'react'
import { graphql, Link  } from 'gatsby'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className="blog-post">
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage
export const pageQuery = graphql`
    query pageQuery{
      allContentfulBlog(filter:{
        node_locale:{eq:"en-US"},
      },){
        edges{
          node{
            title
            slug
          }
        }
      }
    }
`
