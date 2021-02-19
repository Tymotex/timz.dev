import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Blogs.module.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import BlogCard from './BlogCard.js';
import {
    Divider
} from '@material-ui/core';

const BlogsList = ({ blogs }) => {
    return (
        <ResponsiveMasonry 
            className={styles.blogList}      
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            {/* Projects */}
            <h2 className={styles.listTitle}>
                Project Blogs
            </h2>
            <Divider />
            <Masonry>
                {blogs.map((eachBlog, i) => (
                    // TODO: Add spacing between grid items, add card text, clickable link
                    <BlogCard blog={eachBlog} key={i} />
                ))}
            </Masonry>
            <Divider />
        </ResponsiveMasonry>
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
