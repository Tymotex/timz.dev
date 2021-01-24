import { graphql } from "gatsby";
import React from "react";

export const query = graphql`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    title,
                    publishedDate
                }
            }
        }  
    } 
`;

const Blog = ({ data, pageContext }) => {
    return (
        <div>
            {data.allContentfulBlogPost.edges.forEach((eachEdge) => (
                <div>
                    {eachEdge.node.title}
                </div>
            ))}
        </div>
    );
}

// const Blog = ({ data, pageContext }) => {
//     let parser = HtmlToReact.Parser;
//     parser = new parser();
//     const parsedHTML = parser.parse(data.markdownRemark.html);
//     return (
//         <div>
//             <div>
//                 {data.markdownRemark.timeToRead} minutes to read
//             </div>
//             <div>
//                 {parsedHTML}
//             </div>
//         </div>
//     );
// }

// const Blog = () => {
//     return <div>Blog placeholder</div>
// }

export default Blog;
