import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { BlogInfo, getAllBlogs, getRecentBlogs } from "scripts/blogs";
import { BlogList } from "src/components/Blog";
import ContentContainer from "src/components/Container/ContentContainer";
import { MiniDivider } from "src/components/Divider";
import { RecentBlogs } from "src/components/RecentBlogs";
import { BlogContext } from "src/contexts/BlogContext";
import styles from "./BlogIndex.module.scss";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs: BlogInfo[] = await getAllBlogs();
    const recentBlogs: BlogInfo[] = await getRecentBlogs();

    return {
        props: {
            blogs: blogs,
            recentBlogs: recentBlogs,
        },
    };
};

interface Props {
    blogs: BlogInfo[];
    recentBlogs: BlogInfo[];
}

const BlogIndex: NextPage<Props> = ({ blogs, recentBlogs }) => {
    const [blogList, setBlogList] = useState<BlogInfo[]>(blogs);
    const softwareEngineeringBlogs = useMemo(
        () => blogList.filter((blog) => blog.category !== "projects"),
        [blogList],
    );
    const projectBlogs = useMemo(
        () => blogList.filter((blog) => blog.category === "projects"),
        [blogList],
    );
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
            <div className={styles.mainContainer}>
                <RecentBlogs blogs={recentBlogs} />
                <ContentContainer className={styles.blogsFeedContainer}>
                    <section className={styles.blogSection}>
                        <div className={styles.blogSectionHeader}>
                            <h1 className={styles.title}>
                                Software Engineering Blogs
                            </h1>
                            <aside className={styles.numArticles}>
                                {softwareEngineeringBlogs.length} article
                                {softwareEngineeringBlogs.length !== 1 && "s"}.
                            </aside>
                        </div>
                        <MiniDivider />
                        <p className={styles.description}>
                            Informative articles on useful technologies and how
                            some cool things work.
                        </p>
                        <BlogList blogs={softwareEngineeringBlogs} />
                    </section>
                    <section className={styles.blogSection}>
                        <div className={styles.blogSectionHeader}>
                            <h1 className={styles.title}>Project Blogs</h1>
                            <aside className={styles.numArticles}>
                                {projectBlogs.length} article
                                {projectBlogs.length !== 1 && "s"}.
                            </aside>
                        </div>
                        <MiniDivider />
                        <p className={styles.description}>
                            Details about some software engineering projects
                            that I&apos;ve worked on.
                        </p>
                        <BlogList blogs={projectBlogs} />
                    </section>
                </ContentContainer>
            </div>
        </>
    );
};

export default BlogIndex;
