import type { GetStaticProps, NextPage } from "next";
import { BlogInfo, getAllBlogs } from "scripts/blogs";
import { BlogList } from "src/components/Blog";
import ContentContainer from "src/components/Container/ContentContainer";
import { MiniDivider, SubtleDivider } from "src/components/Divider";
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
    return (
        <ContentContainer>
            <h1 className={styles.title}>Byte-Sized Concepts</h1>
            {/* <p></p> */}
            <MiniDivider />
            <BlogList
                blogs={blogs.filter((blog) => blog.category !== "projects")}
            />

            {/* <h1 className={styles.title}>Projects</h1>
            <MiniDivider />
            <BlogList
                blogs={blogs.filter((blog) => blog.category === "projects")}
            /> */}
        </ContentContainer>
    );
};

export default BlogIndex;
