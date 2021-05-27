import { graphql } from 'gatsby';
import React from 'react';
import styles from './blog.module.scss';
import marked from 'marked';
import BlogLayout from 'src/layouts/BlogLayout';
import { Helmet } from 'react-helmet';

// This GraphQL query gets run for every markdown file that exists in:
// src/components/windows/project-window/project-descriptions
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            rawMarkdownBody
            id
            fields {
                slug
            }
            frontmatter {
                title
                summary
            }
        }
    }
`;

const Blog = ({ data, pageContext }) => {
    // The .md file content is first converted to HTML, then rendered using dangerouslySetInnerHTML
    const convertedHtml = marked(data.markdownRemark.rawMarkdownBody);
    const { title, summary } = data.markdownRemark.frontmatter;
    return (
        <BlogLayout pageName={pageContext.slug}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={styles.blogContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.summary}>
                    <em>{summary}</em>
                </p>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: convertedHtml }} />
            </div>
        </BlogLayout>
    );
};

export default Blog;
