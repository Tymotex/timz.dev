import React from 'react';
import { 
    useStaticQuery,
    graphql
} from 'gatsby';
import { BlogsList } from '../components/blogs';
import { FadeInWrapper } from '../components/animations';

const Blogs = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        } 
    `);
    const blogs = data.allMarkdownRemark.edges.map(eachEdge => {
        return {
            title: eachEdge.node.frontmatter.title,
            link: "https://www.google.com"
        };
    });
    return (
        <FadeInWrapper duration={2.5}>
            <BlogsList blogs={blogs}/>   
        </FadeInWrapper>
    );
};

export default Blogs;
