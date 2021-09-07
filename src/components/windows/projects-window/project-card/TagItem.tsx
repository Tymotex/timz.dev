import { Chip } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import React, { FC } from 'react';

type TagTypes = 'team' | 'ongoing' | 'uni';

const toTitleCase = (str: string): string => {
    return str.replace(/\w\S*/g, txt => {
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

interface TagItemProps {
    tag: TagTypes;
}

const TagItem: FC<TagItemProps> = ({ tag }) => {
    return (
        <Chip
            style={{ marginRight: '10px' }}
            avatar={<Icon tagName={tag} />}
            label={toTitleCase(tag)}
        />
    );
};

export default TagItem;
