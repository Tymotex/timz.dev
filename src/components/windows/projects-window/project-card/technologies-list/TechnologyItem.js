import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const TechnologyItem = ({ icon, name }) => {
    return (
        <Chip
            avatar={
                <Avatar src={icon} />
            }
            label={name} 
        />
    );
}

export default TechnologyItem;
