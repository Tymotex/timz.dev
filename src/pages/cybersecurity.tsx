import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageBreadcrumbs } from 'src/components/cybersecurity/breadcrumbs';
import { ParallaxBanner } from 'src/components/cybersecurity/parallax-banner';
import styles from '../components/templates/CybersecurityBlog.module.scss';
import { CybersecurityLayout } from '../layouts';

const CybersecurityBlogs = () => {
    return (
        <CybersecurityLayout>
            <Helmet>
                <title>Cybersecurity Blogs</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.content}>
                    <PageBreadcrumbs></PageBreadcrumbs>
                    <h1 className={styles.title}>Cybersecurity &mdash; CTFs</h1>
                    <h2>Introduction</h2>
                    {/* TODO: Turn these uls into components. Feed props. Style them later. */}
                    <ul>
                        <li>
                            <Link to="/cybersecurity/introduction">Introduction to CTFs</Link>
                        </li>
                        <li>
                            <Link to="/cybersecurity/introduction">
                                Kali Linux on VMWare setup guide for Windows/Linux host machines
                            </Link>
                        </li>
                    </ul>

                    <h2>Topics & Core Concepts</h2>
                    <ul>
                        <li>
                            Cryptography
                            <ul>
                                <li>
                                    <Link to="/cybersecurity/rsa">RSA</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Web exploitation
                            <ul>
                                <li>
                                    <Link to="/cybersecurity/xss">XSS (Cross-Site Scripting)</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Binary exploitation
                            <ul>
                                <li>
                                    <Link to="/cybersecurity/endianness">Endianness</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            General
                            <ul>
                                <li>
                                    <Link to="/cybersecurity/text-encoding">Text Encoding</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ParallaxBanner
                    imageSource={'https://images4.alphacoders.com/110/thumb-1920-1108171.png'}
                />
            </div>
        </CybersecurityLayout>
    );
};

export default CybersecurityBlogs;
