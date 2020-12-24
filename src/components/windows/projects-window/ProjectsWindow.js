import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import Window from '../Window.js';
import { ProjectCard } from './project-card';
import windowStyles from '../Window.module.scss';
import projects from './projects.js';

const truncate = (input) => input.length > 250 ? `${input.substring(0, 250)}...` : input;

const ProjectsWindow = (props) => {
    return (
        <Window {...props} >
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    Main Projects
                </Typography>
                <p>
                    These are personal projects that I spent a significant 
                    amount of time and effort on.
                </p>
            </div>
            <Grid container spacing={3}>
                {projects.mainProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard project={eachProject}>
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography className={windowStyles.demoLink} variant="h6" component="p">
                                    <a className={windowStyles.demoLink} href={eachProject.demoLink}>
                                        {eachProject.demoPromptText}
                                    </a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
            <hr className={windowStyles.lightHr} />

            {/* Other Projects */}
            <div className={windowStyles.paddedContainer}>
                <Typography gutterBottom variant="h6" component="h2">
                    More Projects
                </Typography>
                <p>
                    Projects that were either built in university or smaller
                    personal projects.
                </p>
            </div>
            <Grid container spacing={3}>
                {projects.miniProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard project={eachProject}>
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography variant="h6" component="p">
                                    <a className={windowStyles.demoLink} href={eachProject.demoLink}>{eachProject.demoPromptText}</a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
            <hr className={windowStyles.lightHr} />

            {/* Babbi projects 👶 */}
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
            <Grid container spacing={3}>
                {projects.babyProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard project={eachProject}>
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography variant="h6" component="p">
                                    <a className={windowStyles.demoLink} href={eachProject.demoLink}>{eachProject.demoPromptText}</a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
        </Window>
    )
}

export default ProjectsWindow;