import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const TechnologyItem = ({ icon, name }) => {
    return (
        <Chip
            size="small"
            color="primary"
            avatar={
                <Avatar src={icon} />
            }
            label={capitalise(name)} 
        />
    );
}

export default TechnologyItem;
