import React from 'react';
import tagIcons from 'src/portfolio-data/tag-icons';
import styles from './Tag.module.scss';

const TagList = () => {
    return (
        <>
            {/* <ul className={styles.tagLegend}>
                <li className={styles.tagItem}>
                    <img className={styles.tagIcon} src={tagIcons.team} alt="team tag" />
                    <span className={styles.tagText}>Team-based project</span>
                </li>
                <li className={styles.tagItem}>
                    <img className={styles.tagIcon} src={tagIcons.ongoing} alt="ongoing tag" />
                    <span className={styles.tagText}>Ongoing project</span>
                </li>
                <li className={styles.tagItem}>
                    <img className={styles.tagIcon} src={tagIcons.uni} alt="uni tag" />
                    <span className={styles.tagText}>Extended university project</span>
                </li>
            </ul> */}
        </>
    );
};

export default TagList;
