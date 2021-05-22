import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Tag.module.scss';
import TagItem from './TagItem';

const TagList = ({ tags }) => {
    return (
        <ul className={styles.tagList}>
            {tags.map(eachTag => (
                <TagItem tag={eachTag} />
            ))}
        </ul>
    );
};

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
    tags: [],
};

export default TagList;
