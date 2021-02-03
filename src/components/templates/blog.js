import { graphql } from "gatsby";
import React from "react";
import ReactMarkdown from 'react-markdown';
import styles from './blog.module.scss';

// This GraphQL query gets run for every markdown file that exists in:
// src/components/windows/project-window/project-descriptions 
export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            rawMarkdownBody,
            id,
            fields {
                slug
            }
        }
    }
`;

const Blog = ({ data, pageContext }) => {
    return (
        <div className={styles.blogContainer}>
            <ReactMarkdown>
                {data.markdownRemark.rawMarkdownBody}
            </ReactMarkdown>
        </div>
    );
}

// export const query = graphql`
//     query {
//         allContentfulBlogPost {
//             edges {
//                 node {
//                     title,
//                     publishedDate
//                 }
//             }
//         }  
//     } 
// `;

// const Blog = ({ data, pageContext }) => {
//     return (
//         <div>
//             {data.allContentfulBlogPost.edges.forEach((eachEdge) => (
//                 <div>
//                     {eachEdge.node.title}
//                 </div>
//             ))}
//         </div>
//     );
// }

export default Blog;
