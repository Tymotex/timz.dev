import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import Window from '../Window.js';
import { ProjectCard } from './project-card';
import windowStyles from '../Window.module.scss';
import { 
    babyProjects,
    mainProjects,
    miniProjects,
    ongoingProjects
} from './projects.js';

const truncate = (input) => input.length > 250 ? `${input.substring(0, 250)}...` : input;

const ProjectsWindow = (props) => {
    return (
        <Window {...props} >
            <div className={windowStyles.paddedContainer}>
                <h3>Personal Projects</h3>
                <p>
                    A collection of personal projects that I spent a significant 
                    amount of time and effort on.
                </p>
            </div>
            <Grid container spacing={3}>
                {mainProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard 
                            projectName={eachProject.title}
                            image={eachProject.thumbnail}
                            technologies={eachProject.technologies}
                        >
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography className={windowStyles.demoLink} variant="h6" component="p">
                                    <a className={windowStyles.demoLink} href={eachProject.demoLink}>{eachProject.demoPromptText}</a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
            <hr className={windowStyles.thinHr} />

            {/* Other Projects */}
            <div className={windowStyles.paddedContainer}>
                <h3>Other Projects</h3>
                <p>
                    A collection of projects that were either university projects or smaller
                    personal projects.
                </p>
            </div>
            <Grid container spacing={3}>
                {miniProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard 
                            projectName={eachProject.title}
                            image={eachProject.thumbnail}
                            technologies={eachProject.technologies}
                        >
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography variant="h6" component="p">
                                    <a href={eachProject.demoLink}>{eachProject.demoPromptText}</a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
            <hr className={windowStyles.thinHr} />

            {/* Babby projects 👶 */}
            <div className={windowStyles.paddedContainer}>
                <h3>Baby Projects 👶</h3>
                <p>
                    A collection of hobby projects that aren't too impressive. These projects
                    gave rise to my interest in software engineering during my junior and
                    senior years at high school.
                </p>
            </div>
            <Grid container spacing={3}>
                {babyProjects.map((eachProject) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ProjectCard 
                            projectName={eachProject.title}
                            image={eachProject.thumbnail}
                            technologies={eachProject.technologies}
                        >
                            <Typography variant="body2" component="p">
                                {truncate(eachProject.description)}    
                            </Typography>
                            {eachProject.demoLink !== "" && (
                                <Typography variant="h6" component="p">
                                    <a href={eachProject.demoLink}>{eachProject.demoPromptText}</a>
                                </Typography>
                            )}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
            <hr className={windowStyles.thinHr} />

            {/* About this site as a project */}
            <div className={windowStyles.paddedContainer}>
                <h3>About this site</h3>
                <p>
                    This site was built with Gatsby, a React framework powered by GraphQL. 
                    See the repository for my frontend <a href="https://github.com/Tymotex/timz.dev">here</a>.
                </p>
            </div>
        </Window>
    )
}

export default ProjectsWindow;