import { graphql } from "gatsby";
import React from "react";
import styles from './blog.module.scss';
import marked from 'marked';
import BlogLayout from '../../layouts/BlogLayout';

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
    // The .md file content is first converted to HTML, then rendered using dangerouslySetInnerHTML 
    const convertedHtml = marked(data.markdownRemark.rawMarkdownBody);
    return (
        <BlogLayout pageName={pageContext.slug}>
            <div className={styles.blogContainer}>
                <div dangerouslySetInnerHTML={{__html: convertedHtml}} />
            </div>
        </BlogLayout>
    );
}

export default Blog;
