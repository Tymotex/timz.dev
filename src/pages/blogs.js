import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BlogsList } from '../components/blogs';
import { BlogLayout } from '../layouts';
import styles from './blogs.module.scss';
import { Divider } from '@material-ui/core';
import { BlogsSorter } from 'src/components/blogs';
import sortingFuncs from 'src/components/blogs/sortingFunctions';

const Blogs = ({ query }) => {
    const [sortFuncIndex, setSortFuncIndex] = useState(0);

    console.log(sortingFuncs);

    return (
        <BlogLayout initialQuery={query}>
            <Helmet>
                <title>Project Blogs</title>
            </Helmet>
            {/* Projects */}
            <div className={styles.container}>
                <h2 className={styles.listTitle}>Project Blogs</h2>
                <p className={styles.listSummary}>
                    A collection of my software projects, including serious personal projects, some
                    extended university projects, and spaghetti code beginner projects{' '}
                    <span role="img" aria-label="Horrified">
                        😵
                    </span>
                    .
                </p>
                <BlogsSorter sortFuncIndex={sortFuncIndex} setSortFuncIndex={setSortFuncIndex} />
                <Divider />
            </div>
            <BlogsList searchQuery={query} sortCmp={sortingFuncs[sortFuncIndex].cmp} />
        </BlogLayout>
    );
};

export default Blogs;
