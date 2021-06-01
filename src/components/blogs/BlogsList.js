import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blogs.module.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import BlogCard from './BlogCard.js';
import { Divider } from '@material-ui/core';

const applySearchFilter = (blogs, searchQuery) => {
    return blogs.filter(eachBlog => eachBlog.title.toLowerCase().includes(searchQuery));
};

const BlogsList = ({ blogs, searchQuery }) => {
    const filteredBlogs = applySearchFilter(blogs, searchQuery);
    const sortedBlogs = filteredBlogs.sort((blogA, blogB) =>
        blogA.title.toLowerCase().localeCompare(blogB.title.toLowerCase())
    );

    return (
        <ResponsiveMasonry
            className={styles.blogList}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            {/* Projects */}
            <h2 className={styles.listTitle}>Project Blogs</h2>
            <p className={styles.listSummary}>
                A collection of my software projects, including serious personal projects, some
                university projects, and spaghetti code beginner projects{' '}
                <span role="img" aria-label="Horrified">
                    😵
                </span>
                .
            </p>
            <Divider />
            <Masonry>
                {sortedBlogs.map((eachBlog, i) => (
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
            link: PropTypes.string,
        })
    ),
};

export default BlogsList;
