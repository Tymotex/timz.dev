import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import windowStyles from '../Window.module.scss';
import { ProjectCard } from './project-card';

// Truncation utility functions

/**
 * Determines whether the given string needs to be truncated. Any string
 * greater than default 250 characters requires truncation 
 */
const requiresTruncation = (input) => input.length > 250; 

/**
 * If the string requires truncation, returns a string truncated at 250 characters
 * and with ellipses appended, otherwise returns the same input string 
 */
const truncate = (input) => input.length > 250 ? `${input.substring(0, 250)}...` : input;

const ProjectsGrid = ({ projects }) => {
    return (
        <Grid container spacing={3}>
            {projects.map((eachProject) => (
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard project={eachProject}>
                        <Typography variant="body2" component="p">
                            {requiresTruncation(eachProject.description) ? (
                                <span>
                                    {`${truncate(eachProject.description)} `}
                                    <a href="https://www.google.com">Read more</a>
                                </span>
                            ) : (
                                eachProject.description
                            )}    
                        </Typography>
                        {eachProject.furtherLinks.map((eachLink) => (
                            <Typography className={windowStyles.demoLink} variant="h6" component="p">
                                <a className={windowStyles.demoLink} href={eachLink.link}>
                                    {eachLink.label}
                                </a>
                            </Typography>
                        ))}
                    </ProjectCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsGrid;