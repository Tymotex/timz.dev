import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BlogInfo, getAllBlogs } from "scripts/blogs";
import { BlogList } from "src/components/Blog";
import ContentContainer from "src/components/Container/ContentContainer";
import { MiniDivider } from "src/components/Divider";
import { BlogContext } from "src/contexts/BlogContext";
import styles from "./BlogIndex.module.scss";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs: BlogInfo[] = await getAllBlogs();

    // Filter out unpublished blogs from being shown on the index page.
    return {
        props: {
            blogs: blogs && blogs.filter((blog) => blog.frontmatter.published),
        },
    };
};

interface Props {
    blogs: BlogInfo[];
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
    const [blogList, setBlogList] = useState<BlogInfo[]>(blogs);
    const blogContext = useContext(BlogContext);
    const router = useRouter();

    // Match the search query against the blog titles and filter for the
    // specified tags.
    useEffect(() => {
        const tagsCsv = router.query.tags as string;
        const tags: Set<string> = tagsCsv
            ? new Set(tagsCsv.split(","))
            : new Set([]);

        setBlogList(
            blogs.filter((blog) => {
                // Match title first.
                const pattern = new RegExp(`${blogContext.searchQuery}`, "gi");
                if (!pattern.test(blog.frontmatter.title)) return false;

                // Match for tags. If no tags are supplied, then don't filter.
                if (!tags || tags.size < 1) return true;

                // Filter out blogs with no tags.
                if (!blog.frontmatter.tags || blog.frontmatter.tags.length < 1)
                    return false;

                return blog.frontmatter.tags.some((tag) => tags.has(tag));
            }),
        );
    }, [blogs, blogContext, router.query]);

    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <ContentContainer>
                <h1 className={styles.title}>Byte-Sized Concepts</h1>
                <MiniDivider />
                <BlogList
                    blogs={blogList.filter(
                        (blog) => blog.category !== "projects",
                    )}
                />
            </ContentContainer>
        </>
    );
};

export default BlogIndex;
