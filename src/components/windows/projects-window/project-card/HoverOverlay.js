import React from 'react';
import windowStyles from '../../Window.module.scss';

const HoverOverlay = ({ icon, label }) => {
    return (
        <span className={windowStyles.overlay}>
            <img src={icon} />
            <p>
                <strong>
                    {label}
                </strong>
            </p>
        </span>
    );
}

export default HoverOverlay;
