import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";
import { AiFillRead as BookIcon } from "react-icons/ai";
import { BsMedium as MediumIcon } from "react-icons/bs";
import { Blog, getAllBlogs, getBlog } from "scripts/blogs";
import { ChipGroup } from "src/components/ChipGroup";
import ContentContainer from "src/components/Container/ContentContainer";
import { SubtleDivider } from "src/components/Divider";
import { Loader } from "src/components/Loader";
import { TableOfContents } from "src/components/TableOfContents";
import { DarkModeContext } from "src/contexts/LightDarkThemeProvider";
import { getBlogDate } from "src/util/dateUtils";
import { getHeadings } from "src/util/getBlogComponents";
import styles from "./BlogPage.module.scss";

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
    const allBlogs = await getAllBlogs(true);
    return {
        paths: allBlogs.map((blog) => ({
            params: { category: blog.category, slug: blog.slug },
        })),
        fallback: true,
    };
};

interface Props {
    blog: Blog;
}

interface Heading {
    text: string;
    indentLevel: number;
    orderOnPage: number;
}

const BlogIndex: NextPage<Props> = ({ blog }) => {
    const router = useRouter();
    const theme = useContext(DarkModeContext);

    // Blog MDX component.
    const Blog = useMemo(
        () =>
            blog &&
            typeof blog !== "undefined" &&
            getMDXComponent(blog.code, { Image: Image }),
        [blog],
    );
    const dateStr = useMemo(() => getBlogDate(blog), [blog]);
    const blogContentsContainerId = useMemo(
        () => "blog-contents-container",
        [],
    );

    // There is a very strange bug where refreshing on an anchored route like
    // timz.dev/blog/foo#bar will briefly show the correct page, then suddenly
    // redirect to timz.dev/blog/foo%23bar. This `useEffect` callback forcefully
    // corrects that by redirecting back to timz.dev/blog/foo#bar which then
    // shows the correct UI. This causes a brief flash of the incorrect page,
    // unfortunately.
    useEffect(() => {
        if (window.location.href.includes("%23")) {
            const [mainPageUrl, fragmentId] = window.location.href.split("%23");
            router.push(mainPageUrl + "#" + fragmentId);
        }
    }, [router]);

    if (!blog) return <Loader />;
    if (router.isFallback) return <>Loading...</>;

    return (
        <>
            <Head>
                <title>{blog.frontmatter.title}</title>
                <meta
                    name="description"
                    content={blog.frontmatter.description}
                />
                <meta name="og:title" content={blog.frontmatter.title} />
                {blog.frontmatter.thumbnail && (
                    <meta
                        name="og:image"
                        content={blog.frontmatter.thumbnail}
                    />
                )}
                <meta
                    name="og:description"
                    content={blog.frontmatter.description}
                />
            </Head>
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
                    invertColour={!theme.isDarkMode}
                />
                <br />
            </ContentContainer>
            <div className={styles.blogContainer}>
                <div
                    id={blogContentsContainerId}
                    className={styles.blogContents}
                >
                    {Blog && <Blog components={getHeadings()} />}
                </div>
                <TableOfContents
                    blogContentsContainerId={blogContentsContainerId}
                />
            </div>
            <br />
            <SubtleDivider />
            <ContentContainer className={styles.blogFooter}>
                <p>
                    Thanks for reading 🤓!{" "}
                    <Link href="/contact">Let me know</Link> if you found this
                    interesting.
                </p>
                <p>
                    See more of my{" "}
                    <Link href="/blogs">
                        <a>blogs</a>
                    </Link>
                    .
                </p>
            </ContentContainer>
        </>
    );
};

export default BlogIndex;
