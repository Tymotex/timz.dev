import React from 'react';
import styles from './CybersecurityLayout.module.scss';
import SideNav from 'src/components/cybersecurity/sidenav/SideNav';

const CybersecurityLayout = ({ children }) => {
    return (
        <>
            <SideNav />
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default CybersecurityLayout;
