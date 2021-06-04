import React from 'react';
import { Expandable } from 'src/components/expandable';
import Window from 'src/components/windows/Window.js';
import { bio } from 'src/portfolio-data';
import InterestsLists from './InterestsList';
import WorkExperience from './WorkExperience';
import AwardsLists from './AwardsList';
import SpotifyDisplay from './SpotifyDisplay';
import PDFDisplayer from './PDFDisplayer';

const AboutWindow = props => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <p>{aboutDescription}</p>
            <Expandable text="Resume">
                <PDFDisplayer fileURL={bio.resumeURL} linkText="Resume Link" />
            </Expandable>
            <Expandable text="Transcript">
                <PDFDisplayer fileURL={bio.transcriptURL} linkText="Transcript Link" />
            </Expandable>
            <Expandable text="Work Experience">
                <WorkExperience />
            </Expandable>
            <Expandable text="Awards">
                <AwardsLists />
            </Expandable>
            <Expandable text="Interests and Hobbies">
                <InterestsLists interests={interests} />
            </Expandable>
            <SpotifyDisplay />
        </Window>
    );
};

export default AboutWindow;
