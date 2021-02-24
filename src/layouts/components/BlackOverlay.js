import React from 'react';
import styles from '../BlogLayout.module.scss';

const BlackOverlay = ({ overlayActive }) => {
    return (
        <div className={overlayActive ? styles.blackOverlay : ""} />
    );
}

export default BlackOverlay;
