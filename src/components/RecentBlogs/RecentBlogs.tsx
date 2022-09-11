import Link from "next/link";
import React from "react";
import { BlogInfo } from "scripts/blogs";
import styles from "./RecentBlogs.module.scss";

interface Props {
    blogs: BlogInfo[];
}

const RecentBlogs: React.FC<Props> = ({ blogs }) => {
    return (
        <ul className={styles.blogsList}>
            <li className={styles.heading}>Recent Blogs</li>
            {blogs &&
                blogs.map((blog) => (
                    <li className={styles.blog} key={blog.frontmatter.title}>
                        <Link
                            href={`/blogs/${blog.category}/${blog.slug}`}
                            scroll={false}
                        >
                            {blog.frontmatter.title}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default RecentBlogs;
