import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment, useMemo } from "react";
import { Blog, getAllBlogs } from "scripts/blogs";
import { getMDXComponent } from "mdx-bundler/client";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs: Blog[] = await getAllBlogs();
    return {
        props: {
            blogs: blogs,
        },
    };
};

// Generate a route for every blog using their 'slug', which is a string that
// uniquely identifies a part of a web address.
// Eg. the .mdx blog with filename 'Learn-React-Hooks.mdx' will have a
//     corresponding route: '/blogs/Learn-React-Hooks'.
export const getStaticPaths: GetStaticPaths = async (context) => {
    const allBlogs = await getAllBlogs();
    return {
        paths: allBlogs.map((blog) => ({
            params: { slug: blog.slug },
        })),
        fallback: false,
    };
};

interface Props {
    blogs: Blog[];
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
    const blogComponents = useMemo(
        () => blogs.map((blog) => getMDXComponent(blog.code)),
        [],
    );

    return (
        <>
            <h1>Welcome</h1>
            {blogComponents.map((Blog, i) => (
                <Fragment key={i}>
                    <Blog />
                </Fragment>
            ))}
        </>
    );
};

export default BlogIndex;
