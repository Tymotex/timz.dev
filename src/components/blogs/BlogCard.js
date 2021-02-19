import React from 'react';
import { Link } from 'gatsby';
import styles from './Blogs.module.scss';

const BlogCard = ({ blog }) => {
    return (
        <Link to={blog.link}>
            <div className={styles.blogCard}>
                <div className={styles.image}>
                    <img
                        src={blog.image}
                        alt=""
                    />
                </div>
                <div className={styles.hoverContent}>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.description}>
                        {blog.summary}
                    </p>
                    <p className={styles.footnote}>
                        {`${blog.timeToRead} minute${blog.timeToRead === 1 ? "" : "s"} to read`}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;
