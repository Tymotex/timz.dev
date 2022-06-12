import type { GetStaticProps, NextPage } from "next";
import { Fragment, useMemo } from "react";
import { Blog, BlogInfo, getAllBlogs } from "scripts/blogs";
import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import { motion } from "framer-motion";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs: BlogInfo[] = await getAllBlogs();
    return {
        props: {
            blogs: blogs,
        },
    };
};

interface Props {
    blogs: BlogInfo[];
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <h1>Welcome</h1>
            <ul>
                {blogs.map((blogInfo) => (
                    <li key={blogInfo.slug}>
                        <Link href={`/blogs/${blogInfo.slug}`}>
                            {`${blogInfo.slug} - ${blogInfo.frontmatter.title}`}
                        </Link>
                        ({blogInfo.frontmatter.date})
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default BlogIndex;
