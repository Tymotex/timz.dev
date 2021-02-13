import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Blogs.module.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const BlogsList = ({ blogs }) => {
    console.log(blogs);

    return (
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                {/* Projects */}
                <Masonry>
                    {blogs.map((eachBlog, i) => (
                        // TODO: Add spacing between grid items, add card text, clickable link
                        <img
                            key={i}
                            src={eachBlog.image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
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
