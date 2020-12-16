import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import itemStyles from './TechnologyItem.module.scss';

const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const TechnologyItem = ({ icon, name }) => {
    return (
        <Chip
            className={itemStyles.techChip}
            avatar={
                <Avatar src={icon} />
            }
            label={capitalise(name)} 
        />
    );
}

export default TechnologyItem;
