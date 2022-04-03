import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MarkdownRenderer } from 'src/components/markdown';
import { CybersecurityLayout } from '../layouts';
import styles from './cybersecurity.module.scss';
import mdSource from 'src/portfolio-data/cybersecurity/test.md';

const CybersecurityBlogs = () => {
    const bannerRef = useRef(null);

    // Parallax banner.
    useEffect(() => {
        const bannerImage = bannerRef.current;

        const parallaxScroll = () => {
            const offset = window.pageYOffset;
            bannerImage.style.backgroundPositionY = offset * 0.7 + 'px';
        };

        window.addEventListener('scroll', parallaxScroll);

        return () => {
            window.removeEventListener('scroll', parallaxScroll);
        };
    }, []);

    return (
        <CybersecurityLayout>
            <Helmet>
                <title>Cybersecurity Blogs</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.content}>
                    <MarkdownRenderer mdSource={mdSource} />
                </div>
                <div
                    ref={bannerRef}
                    style={{
                        height: '500px',
                        width: '100%',
                        backgroundImage:
                            'url(https://images4.alphacoders.com/110/thumb-1920-1108171.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: -10,
                    }}
                ></div>
                {/* <img
                    className={styles.bannerImage}
                    src="https://images4.alphacoders.com/110/thumb-1920-1108171.png"
                ></img> */}
            </div>
        </CybersecurityLayout>
    );
};

export default CybersecurityBlogs;
