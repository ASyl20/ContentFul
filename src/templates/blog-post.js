import React,{ Component } from "react";
import PropTypes from 'prop-types'
import { graphql } from "gatsby";


class BlogPost extends Component{
    render(){
        const{
            title
        } = this.props.data.contentfulBlog
        return(
            <div className={StyleSheet.base}>
                    <h1>{title}</h1>
            </div>
        )
    }
}
BlogPost.protoTypes = {
    data: PropTypes.object.isRequired
}
export default BlogPost

export const pageQuery = graphql`
        query blogPostQuery($slug:String!){
            contentfulBlog(slug:{eq:$slug}){
                title
                slug
            }
        }
`