import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MarkdownRenderer } from 'src/components/markdown';
import { CybersecurityLayout } from '../layouts';
import styles from './cybersecurity.module.scss';
import mdSource from 'src/portfolio-data/cybersecurity/test.md';

const CybersecurityBlogs = ({ query }) => {
    return (
        <CybersecurityLayout>
            <Helmet>
                <title>Cybersecurity Blogs</title>
            </Helmet>
            <div className={styles.container}>
                <MarkdownRenderer mdSource={mdSource} />
            </div>
        </CybersecurityLayout>
    );
};

export default CybersecurityBlogs;
