import {
    Grid
} from '@material-ui/core';
import React from 'react';
import projectsBanner from '../../../images/projects-banner.png';
import Window from '../Window.js';
import { ProjectCard } from '../../projects';

const ProjectsWindow = (props) => {
    return (
        <Window {...props} image={projectsBanner} >
            <p>
                My projects! Lorem
            </p>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </Window>
    )
}

export default ProjectsWindow;