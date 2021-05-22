import { Typography } from '@material-ui/core';
import React from 'react';
import Window from '../Window.js';
import windowStyles from '../Window.module.scss';
import projects from 'src/portfolio-data/projects.js';
import ProjectsGrid from './ProjectsGrid';
import { Expandable } from 'src/components/expandable';

const ProjectsWindow = props => {
    return (
        <Window {...props}>
            {/* ===== Main Projects ===== */}
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    Main Projects
                </Typography>
            </div>
            <ProjectsGrid projects={projects.mainProjects} />
            <hr className={windowStyles.lightHr} />

            {/* ===== Other Projects ===== */}
            <div className={windowStyles.paddedContainer}>
                <Expandable text="More Projects">
                    <p>
                        These projects are either smaller personal projects or projects that were
                        built in university and extended.
                    </p>
                    <ProjectsGrid projects={projects.miniProjects} />
                </Expandable>
            </div>
            <hr className={windowStyles.lightHr} />

            {/* ===== Babbi projects 👶 ===== */}
            <div className={windowStyles.paddedContainer}>
                <Expandable text="Baby Projects">
                    <p>
                        These projects were personal hobby projects which gave rise to my interest
                        in software engineering during high school.{' '}
                        <span role="img" aria-label="babyface">
                            👶
                        </span>
                    </p>
                    <ProjectsGrid projects={projects.babyProjects} />
                </Expandable>
            </div>
        </Window>
    );
};

export default ProjectsWindow;
