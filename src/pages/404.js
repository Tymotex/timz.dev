import React from 'react';
import Layout from '../components/page-structure/Layout';
import styles from './404.module.scss';

// Gatsby flickers the 404 page when directly accessing a route like
// /blogs/techsuite. Using a workaround outlined here: https://github.com/gatsbyjs/gatsby/issues/18425
const NotFoundPage = () => {
    const browser = typeof window !== 'undefined' && window;
    return (
        browser && (
            <Layout>
                <div className={styles.centerText}>
                    <h1>NOT FOUND</h1>
                    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                </div>
            </Layout>
        )
    );
};

export default NotFoundPage;
