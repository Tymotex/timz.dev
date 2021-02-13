import React from 'react';
import { 
    useStaticQuery,
    graphql
} from 'gatsby';
import { BlogsList } from '../components/blogs';
import { BlogLayout } from '../layouts';

const Blogs = () => {
	const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            image
						},
						fields {
							slug
						}
                    }
                }
            }
        } 
	`);

    const blogs = data.allMarkdownRemark.edges.map(eachEdge => {
        return {
            title: eachEdge.node.frontmatter.title,
            image: eachEdge.node.frontmatter.image,
            link: `${process.env.BASE_URL}/blogs/${eachEdge.node.fields.slug.toLowerCase()}` 
        };
	});
	
	const sortedBlogs = blogs.sort((blogA, blogB) => blogA.title.toLowerCase().localeCompare(blogB.title.toLowerCase()));

    return (
		<BlogLayout>
			<BlogsList blogs={sortedBlogs}/>  
		</BlogLayout>
    );
};

export default Blogs;
