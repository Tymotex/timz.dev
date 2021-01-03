import { graphql } from "gatsby";
import React from "react";
import HtmlToReact from "html-to-react"

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            html,
            timeToRead,
            wordCount {
                words
            }
        }
    }
`;

const Blog = ({ data, pageContext }) => {
    let parser = HtmlToReact.Parser;
    parser = new parser();
    const parsedHTML = parser.parse(data.markdownRemark.html);
    return (
        <div>
            <div>
                {data.markdownRemark.timeToRead} minutes to read
            </div>
            <div>
                {parsedHTML}
            </div>
        </div>
    );
}

export default Blog;
