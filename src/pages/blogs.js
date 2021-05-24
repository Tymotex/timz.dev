import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogsList } from '../components/blogs';
import { BlogLayout } from '../layouts';

const Blogs = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            image
                            summary
                        }
                        fields {
                            slug
                        }
                        timeToRead
                    }
                }
            }
        }
    `);

    const blogs = data.allMarkdownRemark.edges.map(eachEdge => {
        const { title, image, summary } = eachEdge.node.frontmatter;
        const link = `${process.env.BASE_URL}/blogs/${eachEdge.node.fields.slug.toLowerCase()}`;
        const timeToRead = eachEdge.node.timeToRead;
        return {
            title,
            image,
            summary,
            link,
            timeToRead,
        };
    });

    const sortedBlogs = blogs.sort((blogA, blogB) =>
        blogA.title.toLowerCase().localeCompare(blogB.title.toLowerCase())
    );

    return (
        <BlogLayout>
            <BlogsList blogs={sortedBlogs} />
        </BlogLayout>
    );
};

export default Blogs;
