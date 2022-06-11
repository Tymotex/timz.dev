import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment, useMemo } from "react";
import { Blog, getAllBlogs, getBlog } from "scripts/blogs";
import { getMDXComponent } from "mdx-bundler/client";

export const getStaticProps: GetStaticProps = async (context) => {
    if (context === undefined || context.params === undefined)
        throw new Error("Context object isn't populated with expected fields.");
    const slug = context.params.slug as string;
    const blog = await getBlog(slug);
    return {
        props: {
            blog: blog,
        },
    };
};

// Generate a route for every blog using their 'slug', which is a string that
// uniquely identifies a part of a web address.
// Eg. the .mdx blog with filename 'Learn-React-Hooks.mdx' will have a
//     corresponding route: '/blogs/Learn-React-Hooks'.
export const getStaticPaths: GetStaticPaths = async () => {
    const allBlogs = await getAllBlogs();
    return {
        paths: allBlogs.map((blog) => ({
            params: { slug: blog.slug },
        })),
        fallback: false,
    };
};

interface Props {
    blog: Blog;
}

const BlogIndex: NextPage<Props> = ({ blog }) => {
    const Blog = useMemo(() => getMDXComponent(blog.code), [blog]);

    return (
        <>
            <h3>{blog.frontmatter.title}</h3>
            <Blog />
        </>
    );
};

export default BlogIndex;
