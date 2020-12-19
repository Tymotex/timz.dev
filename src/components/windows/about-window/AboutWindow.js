import React from 'react';
import Window from '../Window.js';
import Typography from '@material-ui/core/Typography';

const AboutWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                Hi! I'm Tim, a 2nd year student studying electrical engineering and 
                computer science at UNSW. 
                As a determined learner, I take pleasure in diving deep into complex problems
                and becoming proficient in software technologies.
                I love the creative freedom in software engineering and building
                meaningful projects that contribute to the world at large.
            </p>
            <Typography gutterBottom variant="h5" component="h2">
                Interests
            </Typography>
            <ul>
                <li>
                    Fullstack engineering
                </li>
                <li>
                    Deep learning
                </li>
                <li>
                    Game development
                </li>
                <li>
                    Electronics
                </li>
                <li>
                    Reading science books and biographies
                </li>
                <li>
                    Fingerstyle guitar
                </li>
            </ul>
        </Window>
    )
}

export default AboutWindow;