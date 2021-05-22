import React from 'react';
import { Expandable } from 'src/components/expandable';
import Window from 'src/components/windows/Window.js';
import { bio } from 'src/portfolio-data';
import InterestsLists from './InterestsList';
import WorkExperience from './WorkExperience';

const AboutWindow = props => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <p>{aboutDescription}</p>
            <Expandable text="Work Experience">
                <WorkExperience />
            </Expandable>
            <Expandable text="Interests and Hobbies">
                <InterestsLists interests={interests} />
            </Expandable>
        </Window>
    );
};

export default AboutWindow;
