import React from 'react';
import Window from '../Window.js';
import Typography from '@material-ui/core/Typography';
import InterestsLists from './InterestsList';
import { bio } from '../../../portfolio-data';

const AboutWindow = (props) => {
    const { aboutDescription, interests } = bio;
    return (
        <Window {...props}>
            <p>
                {aboutDescription}
            </p>
            <Typography gutterBottom variant="h5" component="h2">
                Interests and Hobbies
            </Typography>
            <InterestsLists interests={interests}/>
        </Window>
    )
};

export default AboutWindow;