import type { GetStaticProps, NextPage } from "next";
import { BlogInfo, getAllBlogs } from "scripts/blogs";
import { BlogList } from "src/components/Blog";
import { SubtleDivider } from "src/components/Divider";
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
            <SubtleDivider />
            <BlogList blogs={blogs} />
        </>
    );
};

export default BlogIndex;
