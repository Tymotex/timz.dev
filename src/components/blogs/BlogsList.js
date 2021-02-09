import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Blogs.module.scss';

const BlogsList = ({ blogs }) => {
    console.log(blogs);

    return (
        <ul className={styles.blogList}>
            {blogs.map(blog => (
                <li>
                    <a href={blog.link}><h3>{blog.title}</h3></a>
                </li>
            ))}
        </ul>       
    );
};

BlogsList.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string
        })
    )
};

export default BlogsList;
