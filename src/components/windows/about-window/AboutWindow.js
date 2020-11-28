import React from 'react';
import Window from '../Window.js';

const AboutWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                2nd year student studying electrical engineering and 
                computer science at UNSW. Aspiring full stack developer.
            </p>
        </Window>
    )
}

export default AboutWindow;