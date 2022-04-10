import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BlogsList } from '../components/blogs';
import { BlogLayout } from '../layouts';
import styles from './blogs.module.scss';
import { Divider } from '@material-ui/core';
import { BlogsSorter } from 'src/components/blogs';
import sortingFuncs from 'src/components/blogs/sortingFunctions';
import { Link } from 'gatsby';

const Blogs = ({ query }) => {
    const [sortFuncIndex, setSortFuncIndex] = useState(0);

    return (
        <BlogLayout initialQuery={query}>
            <Helmet>
                <title>Project Blogs</title>
            </Helmet>
            {/* Projects */}
            <div className={styles.container}>
                <br />
                <h2 className={styles.listTitle}>Project Blogs</h2>
                <p className={styles.listSummary}>
                    A collection of my software projects, including serious personal projects, some
                    extended university projects, and spaghetti code beginner projects{' '}
                    <span role="img" aria-label="Horrified">
                        😵
                    </span>
                    .
                </p>
                <p>
                    See my <em>Cybersecurity & CTF</em> blogs and write-ups <Link to="/cybersecurity">here</Link>.
                </p>
                <br />
                <BlogsSorter sortFuncIndex={sortFuncIndex} setSortFuncIndex={setSortFuncIndex} />
                <Divider />
            </div>
            <BlogsList searchQuery={query} sortCmp={sortingFuncs[sortFuncIndex].cmp} />
        </BlogLayout>
    );
};

export default Blogs;
