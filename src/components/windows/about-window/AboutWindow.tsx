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
import { renderMarkdown } from 'src/portfolio-data/utils';

const AboutWindow = props => {
    return (
        <Window {...props}>
            <div
                dangerouslySetInnerHTML={{
                    __html: renderMarkdown(bio.about.elevatorPitch),
                }}
            ></div>
            <Expandable text="Resume & Transcript">
                <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={bio.about.resumeUrl}
                >
                    Resume link{' '}
                </a>
                &{' '}
                <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={bio.about.transcriptUrl}
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
                <InterestsLists interests={bio.interests} />
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
