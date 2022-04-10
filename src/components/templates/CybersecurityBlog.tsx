import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import styles from './CybersecurityBlog.module.scss';
import marked from 'marked';
import BlogLayout from 'src/layouts/BlogLayout';
import { Helmet } from 'react-helmet';
import CybersecurityLayout from 'src/layouts/CybersecurityLayout';
import { PageBreadcrumbs } from '../cybersecurity/breadcrumbs';
import { ParallaxBanner } from '../cybersecurity/parallax-banner';
import { MarkdownKatexRenderer } from 'src/components/cybersecurity/markdown-katex-renderer';
import { ReadingProgress } from '../cybersecurity/reading-progress';

// Explanation: https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/markdown
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
    console.log(data);

    useEffect(() => {});

    return data ? (
        <CybersecurityLayout>
            <Helmet>
                <title>Cybersecurity &mdash; {pageContext.slug}</title>
            </Helmet>
            <div className={styles.container}>
                <ReadingProgress />
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <PageBreadcrumbs pageTitle={pageContext.slug}></PageBreadcrumbs>
                        <h1 className={styles.title}>{pageContext.slug}</h1>
                        <MarkdownKatexRenderer>
                            {data?.markdownRemark?.rawMarkdownBody}
                        </MarkdownKatexRenderer>
                    </div>
                </div>
                <ParallaxBanner
                    imageSrc={'https://images4.alphacoders.com/110/thumb-1920-1108171.png'}
                />
            </div>
        </CybersecurityLayout>
    ) : (
        <></>
    );
};

export default Blog;
