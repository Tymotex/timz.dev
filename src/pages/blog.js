import { graphql } from "gatsby";
import React from "react";

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            rawMarkdownBody
        }
    }
`;

const Blog = ({ data, pageContext }) => {
    console.log(data);
    console.log(pageContext);
    return (
        <div>
            {data.markdownRemark.rawMarkdownBody}
        </div>
    );
}

export default Blog;
