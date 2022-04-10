import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import BlogCard from './BlogCard.js';
import styles from './Blogs.module.scss';

const applySearchFilter = (blogs, searchQuery) => {
    return blogs.filter(eachBlog => eachBlog.title.toLowerCase().includes(searchQuery));
};

const BlogsList = ({ blogs, searchQuery, sortCmp }) => {
    const filteredBlogs = applySearchFilter(blogs, searchQuery);
    const sortedBlogs = filteredBlogs.sort(sortCmp)
        .filter(blog => blog.title && blog.title.length > 0); // TODO: remove this filter. I only added this here to get rid of the cybersecurity blogs that also show up here.
    return (
        <ResponsiveMasonry
            className={styles.blogList}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
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
