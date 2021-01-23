import React from 'react'
import neonButtonStyles from './NeonButton.module.scss';

const NeonButton = ({ link, children }) => {
    return (
        // Note that the 4 empty spans are for styling the 4 sides of the button
        <a className={neonButtonStyles.neonButton} href={link} target="_blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
    );
}

export default NeonButton;
