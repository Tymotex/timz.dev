import type { GetStaticProps, NextPage } from "next";
import { BlogInfo, getAllBlogs } from "scripts/blogs";
import { BlogList } from "src/components/Blog";
import { MiniDivider, SubtleDivider } from "src/components/Divider";
import styles from "./BlogIndex.module.scss";

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
        <>
            <h1 className={styles.title}>Blogs</h1>
            <MiniDivider />
            <BlogList
                blogs={blogs.filter((blog) => blog.category !== "projects")}
            />

            <h1 className={styles.title}>Projects</h1>
            <MiniDivider />
            <BlogList
                blogs={blogs.filter((blog) => blog.category === "projects")}
            />
        </>
    );
};

export default BlogIndex;
