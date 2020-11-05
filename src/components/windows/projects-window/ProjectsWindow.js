import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import Window from '../Window.js';
import { ProjectCard } from '../../projects';
import windowStyles from '../Window.module.scss';

const ProjectsWindow = (props) => {
    return (
        <Window {...props} >
            {/* <h3 className={windowStyles.centeredTitle}>Personal Projects</h3>
            <hr className={windowStyles.thinHr} /> */}
            <Grid container spacing={3}>
                {/* Techsuite */}
                <Grid item xs={12} sm={6} lg={6}>
                    <ProjectCard 
                        projectName="Techsuite"
                        image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg"
                    >
                        <Typography variant="body2" component="p">
                            Techsuite is a collaborative social app built with React, Flask and PostgreSQL.
                        </Typography>
                        <Typography variant="h6" component="p">
                            <a href="">Visit</a>
                        </Typography>
                    </ProjectCard>
                </Grid>
                {/* Interactive Data Structures */}
                <Grid item xs={12} sm={6} lg={6}>
                    <ProjectCard 
                        projectName="Interactive Data Structures"
                        summary=""
                        image="https://helpdeskgeek.com/wp-content/pictures/2019/10/code-1.jpg.optimal.jpg"
                    >
                        <Typography variant="body2" component="p">
                            Interactive-DS is a suite of interactive data structures written in C, developed
                            as a learning resource for computer science students.
                        </Typography>
                        <Typography variant="h6" component="p">
                            <a href="">Visit</a>
                        </Typography>
                    </ProjectCard>
                </Grid>
                {/* Cosmica */}
                <Grid item xs={12} sm={6} lg={6}>
                    <ProjectCard 
                        projectName="Cosmica"
                        summary=""
                        image="https://i.ytimg.com/vi/I3eHzai-lWA/maxresdefault.jpg"
                    >
                        <Typography variant="body2" component="p">
                            A cross-platform sci-fi strategy game written in C# and built with the Unity game engine.
                        </Typography>
                        <Typography variant="h6" component="p">
                            <a href="">Play Online</a>
                        </Typography>
                    </ProjectCard>
                </Grid>
                {/* Neural Networks? */}
                <Grid item xs={12} sm={6} lg={6}>
                    <ProjectCard 
                        projectName="AI - Neural Networks"
                        summary=""
                        image="https://assets.newatlas.com/dims4/default/713adf9/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3f%2Ffb%2Fa2c818ab43428d1e1a19b39eb9e4%2Fdepositphotos-31079473-xl-2015.jpeg"
                    >
                        <Typography variant="body2" component="p">
                            A collection of notes and example models built with PyTorch.
                        </Typography>
                        <Typography variant="h6" component="p">
                            <a href="">Visit</a>
                        </Typography>
                    </ProjectCard>
                </Grid>
            </Grid>

            {/* This site */}

            <div className={windowStyles.paddedContainer}>
                <h3>This site</h3>
                <p>
                    This site was built with Gatsby, a React framework powered by GraphQL. 
                    See the repository <a href="https://github.com/Tymotex/timz.dev">here</a>.
                </p>
            </div>
        </Window>
    )
}

export default ProjectsWindow;