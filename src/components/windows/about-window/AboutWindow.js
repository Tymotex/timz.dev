import React from 'react';
import { Expandable } from 'src/components/expandable';
import Window from 'src/components/windows/Window.js';
import { bio } from 'src/portfolio-data';
import InterestsLists from './InterestsList';
import WorkExperience from './WorkExperience';
import AwardsLists from './AwardsList';
import SpotifyDisplay from './SpotifyDisplay';

const AboutWindow = props => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <p>{aboutDescription}</p>
            <ul>
                <li>
                    <a href={bio.resumeURL}>Resume</a>
                </li>
                <li>
                    <a href={bio.transcriptURL}>Transcript</a>
                </li>
            </ul>
            <Expandable text="Work Experience">
                <WorkExperience />
            </Expandable>
            <Expandable text="Academic Awards and Hackathons">
                <AwardsLists />
            </Expandable>
            <Expandable text="Interests and Hobbies">
                <InterestsLists interests={interests} />
            </Expandable>
            <div style={{ textAlign: 'center' }}>
                <h3>Currently Listening To</h3>
                <SpotifyDisplay />
            </div>
        </Window>
    );
};

export default AboutWindow;
