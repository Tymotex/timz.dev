import React from 'react';
import { Helmet } from 'react-helmet';
import { BlogsList } from '../components/blogs';
import { BlogLayout } from '../layouts';

const Blogs = ({ query }) => {
    return (
        <BlogLayout initialQuery={query}>
            <Helmet>
                <title>Project Blogs</title>
            </Helmet>
            <BlogsList searchQuery={query} />
        </BlogLayout>
    );
};

export default Blogs;
