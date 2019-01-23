import React from 'react'
import { graphql, Link  } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <img src={node.featureImage.resize.src}/>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <Layout>
    <ul className="blog-post">
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
    query pageQuery{
      allContentfulBlog(filter:{
        node_locale:{eq:"en-US"},
      },
      sort:{ fields:[publishDate],order: DESC }
      ){
        edges{
          node{
            title
            slug
            content{
              childMarkdownRemark{
                excerpt
              }
            }
            featureImage{
              resize(width:300,height:300){
                base64
                src
              }
            }
          }
        }
      }
    }
`
