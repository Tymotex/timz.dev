import React from 'react';
import PropTypes from 'prop-types'; 

const BlogsList = ({ blogs }) => {
    console.log(blogs);

    return (
        <ul>
            {blogs.map(blog => (
                <li>
                    <h3>{blog.title}</h3>
                    <a href={blog.link}>link here!</a>
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
