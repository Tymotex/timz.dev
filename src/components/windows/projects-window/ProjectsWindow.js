import { Typography } from '@material-ui/core';
import React from 'react';
import Window from '../Window.js';
import windowStyles from '../Window.module.scss';
import projects from './projects.js';
import ProjectsGrid from './ProjectsGrid';

const ProjectsWindow = (props) => {
    return (
        <Window {...props} >

            {/* ===== Main Projects ===== */}
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    Main Projects
                </Typography>
                <p>
                    These are personal projects that I spent a significant 
                    amount of time and effort on.
                </p>
            </div>
            <ProjectsGrid projects={projects.mainProjects} />
            <hr className={windowStyles.lightHr} />

            {/* ===== Other Projects ===== */}
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    More Projects
                </Typography>
                <p>
                    Projects that were either built in university or smaller
                    personal projects.
                </p>
            </div>
            <ProjectsGrid projects={projects.miniProjects} />
            <hr className={windowStyles.lightHr} />

            {/* ===== Babbi projects 👶 ===== */}
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    Baby Projects <span role="img" aria-label="babyface">👶</span>
                </Typography>
                <p>
                    Personal hobby projects that aren't too impressive but which
                    gave rise to my interest in software engineering during my junior and
                    senior years at high school.
                </p>
            </div>
            <ProjectsGrid projects={projects.babyProjects} />
        </Window>
    );
};

export default ProjectsWindow;