import React from "react";
import { BlogInfo } from "scripts/blogs";
import BlogItem from "./BlogItem";
import styles from "./Blog.module.scss";

interface Props {
    blogs: BlogInfo[];
}

const BlogList: React.FC<Props> = ({ blogs }) => {
    return (
        <ul className={styles.blogList}>
            {blogs &&
                blogs.map((blog) => <BlogItem key={blog.slug} blog={blog} />)}
        </ul>
    );
};

export default BlogList;
