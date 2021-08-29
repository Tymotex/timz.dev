import React from 'react';
import Window from 'src/components/windows/Window.js';
import { useStaticQuery, graphql } from 'gatsby';

const BlogsWindow = props => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `);
    console.log(data);
    // const { edges: blogs } = data.allContentfulBlogPost;
    return (
        <Window {...props}>
            <p>
                Nothing here for now.
                {/* <ul>
                    {blogs.map((eachBlog, i) => (
                        <li>
                            {eachBlog.node.title}
                        </li>
                    ))}
                </ul> */}
            </p>
        </Window>
    );
};

export default BlogsWindow;
