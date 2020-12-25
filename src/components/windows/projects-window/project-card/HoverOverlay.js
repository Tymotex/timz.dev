import React from 'react';
import Typography from '@material-ui/core/Typography';
import overlayStyles from './HoverOverlay.module.scss';
import windowStyles from '../../Window.module.scss';

const HoverOverlay = ({ icon, label }) => {
    return (
        <span className={windowStyles.overlay}>
            <img className={overlayStyles.image} src={icon} alt="linked site"/>
            <Typography className={overlayStyles.label}  style={{"pointer-events": "none"}}  variant="h6" component="h2">
                {label}
            </Typography>
        </span>
    );
};

export default HoverOverlay;
