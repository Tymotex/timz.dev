import React from 'react';
import Window from '../Window';
import WorkExperienceSection from './WorkExperienceSection';

const AboutWindow = props => {
    return (
        <Window {...props}>
            <WorkExperienceSection />
        </Window>
    );
};

export default AboutWindow;
