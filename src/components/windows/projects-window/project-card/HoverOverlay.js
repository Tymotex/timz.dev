import React from 'react';
import Typography from '@material-ui/core/Typography';
import overlayStyles from './HoverOverlay.module.scss';
import windowStyles from '../../Window.module.scss';

const HoverOverlay = ({ icon, label }) => {
    return (
        <span className={windowStyles.overlay}>
            <img src={icon} />
            <Typography className={overlayStyles.label} variant="h6" component="h2">
                {label}
            </Typography>
        </span>
    );
}

export default HoverOverlay;
