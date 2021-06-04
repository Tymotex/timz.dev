import React from 'react';
import styles from './StyledDivider.module.scss';

interface Props {
    type: 'thin' | 'normal';
}

const StyledDivider = () => {
    return <hr className={styles.thinDivider} />;
};

export default StyledDivider;
