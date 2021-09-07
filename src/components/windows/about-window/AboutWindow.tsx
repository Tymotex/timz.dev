import React from 'react';
import { Expandable } from 'src/components/expandable';
import Window from 'src/components/windows/Window.js';
import { bio } from 'src/portfolio-data';
import InterestsLists from './InterestsList';
import WorkExperience from './WorkExperience';
import AwardsLists from './AwardsList';
import SpotifyDisplay from './SpotifyDisplay';
// import CodeStats from './CodeStats';
import { Box, Grid } from '@material-ui/core';
import GitHubStats from './GitHubStats';
import styles from '../Window.module.scss';

const AboutWindow = props => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <div
                dangerouslySetInnerHTML={{
                    __html: aboutDescription,
                }}
            ></div>
            <Expandable text="Resume & Transcript">
                <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={bio.resumeURL}
                >
                    Resume link{' '}
                </a>
                &{' '}
                <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={bio.transcriptURL}
                >
                    academic transcript link
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
                <SpotifyDisplay />
            </Expandable>
            <br />
            <Box className={styles.statsContainer}>
                <Box>
                    <GitHubStats />
                </Box>
                {/* <Box>
                    <CodeStats />
                </Box> */}
            </Box>
        </Window>
    );
};

export default AboutWindow;
