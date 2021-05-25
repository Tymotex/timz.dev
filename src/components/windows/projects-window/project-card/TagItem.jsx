import React from 'react';
import PropTypes from 'prop-types';
import tagIcons from 'src/portfolio-data/tag-icons';
import styles from '../Tag.module.scss';

const TagItem = ({ tag }) => {
    return (
        <li className={styles.tagItem}>
            <img className={styles.tagIcon} src={tagIcons[tag]} alt="Tag icon" />
        </li>
    );
};

TagItem.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default TagItem;
