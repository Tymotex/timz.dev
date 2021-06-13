import React from 'react';
import { Expandable } from 'src/components/expandable';
import Window from 'src/components/windows/Window.js';
import { bio } from 'src/portfolio-data';
import InterestsLists from './InterestsList';
import WorkExperience from './WorkExperience';
import AwardsLists from './AwardsList';
import SpotifyDisplay from './SpotifyDisplay';
import CodeStats from './CodeStats';
import { Grid } from '@material-ui/core';
import GitHubStats from './GitHubStats';

const AboutWindow = props => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <p>{aboutDescription}</p>
            <Expandable text="Resume">
                <a target="_blank" rel="noopener noreferrer" href={bio.resumeURL}>
                    Resume link
                </a>
            </Expandable>
            <Expandable text="Transcript">
                <a target="_blank" rel="noopener noreferrer" href={bio.transcriptURL}>
                    Transcript link
                </a>
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
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <CodeStats />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GitHubStats />
                    <SpotifyDisplay />
                </Grid>
            </Grid>
        </Window>
    );
};

export default AboutWindow;
