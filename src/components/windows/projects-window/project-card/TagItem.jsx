import React from 'react';
import PropTypes from 'prop-types';
import tagIcons from 'src/portfolio-data/tag-icons';
import styles from '../Tag.module.scss';
import { Avatar, Chip } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';

const toTitleCase = str => {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const Icon = ({ tagName }) => {
    switch (tagName) {
        case 'team':
            return (
                <span style={{ marginLeft: '10px', marginTop: '8px' }}>
                    <PeopleIcon />
                </span>
            );
        case 'ongoing':
            return (
                <span style={{ marginLeft: '10px', marginTop: '8px' }}>
                    <BuildIcon />
                </span>
            );
        case 'uni':
            return (
                <span style={{ marginLeft: '10px', marginTop: '8px' }}>
                    <SchoolIcon />
                </span>
            );
    }
};

const TagItem = ({ tag }) => {
    return (
        <Chip
            style={{ marginRight: '10px' }}
            avatar={<Icon tagName={tag} />}
            label={toTitleCase(tag)}
        />
    );
};

TagItem.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default TagItem;
