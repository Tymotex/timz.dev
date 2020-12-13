import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const TechnologyItem = () => {
    return (
        <Chip
            size="small" 
            avatar={
                <Avatar src="/static/images/avatar/1.jpg" />
            }
            label="React" 
        />
    );
}

export default TechnologyItem;
