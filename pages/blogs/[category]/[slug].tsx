import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Blog, getAllBlogs, getBlog } from "scripts/blogs";
import { ChipGroup } from "src/components/ChipGroup";
import ContentContainer from "src/components/Container/ContentContainer";
import styles from "./BlogPage.module.scss";
import { AiFillRead as BookIcon } from "react-icons/ai";
import { BsMedium as MediumIcon } from "react-icons/bs";

export const getStaticProps: GetStaticProps = async (context) => {
    if (context === undefined || context.params === undefined)
        throw new Error("Context object isn't populated with expected fields.");
    const slug = context.params.slug as string;
    const category = context.params.category as string;
    const blog = await getBlog(category, slug);

    return {
        props: {
            blog: blog || null,
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
            params: { category: blog.category, slug: blog.slug },
            // params: { category: , slug: "hello-world" },
        })),
        fallback: true,
    };
};

interface Props {
    blog: Blog;
}

const BlogIndex: NextPage<Props> = ({ blog }) => {
    const router = useRouter();
    const Blog = useMemo(
        () => blog && typeof blog !== "undefined" && getMDXComponent(blog.code),
        [blog],
    );
    const dateStr = useMemo(
        () =>
            new Date(blog?.frontmatter.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
        [blog],
    );

    if (!blog) return <></>;
    if (router.isFallback) return <>Loading...</>;

    return (
        <ContentContainer className={styles.blogPage}>
            <h1 className={styles.title}>{blog.frontmatter.title}</h1>
            <ul className={styles.metadataList}>
                <li className={styles.field}>{dateStr}</li>
                <li className={styles.field}>
                    {blog.minsToRead} mins to read <BookIcon />
                </li>
                {blog.frontmatter.mediumLink && (
                    <li className={`${styles.field} ${styles.link}`}>
                        Medium <MediumIcon />
                    </li>
                )}
            </ul>
            <ChipGroup
                items={blog.frontmatter.tags}
                position="center"
                padding="10px 16px"
                invertColour
            />
            <br />
            {Blog && <Blog />}
        </ContentContainer>
    );
};

export default BlogIndex;
