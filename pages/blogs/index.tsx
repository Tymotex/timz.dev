import type { GetStaticProps, NextPage } from "next";
import { Fragment, useMemo } from "react";
import { Blog, getAllBlogs } from "scripts/blogs";
import { getMDXComponent } from "mdx-bundler/client";
import MyComponent from "src/components/MyComponent";

export const getStaticProps: GetStaticProps = async context => {
    const blogs: Blog[] = await getAllBlogs();
    return {
        props: {
            blogs: blogs,
        },
    };
};

interface Props {
    blogs: Blog[];
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
    const blogComponents = useMemo(
        () => blogs.map(blog => getMDXComponent(blog.code)),
        [],
    );

    return (
        <>
            <h1>Welcome</h1>
            <MyComponent />
            {blogComponents.map((Blog, i) => (
                <Fragment key={i}>
                    <Blog />
                </Fragment>
            ))}
        </>
    );
};

export default BlogIndex;
