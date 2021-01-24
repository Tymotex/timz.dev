import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import { ProjectCard } from './project-card';
import ReactMarkdown from 'react-markdown';
import NeonButton from '../../buttons/neon-button/NeonButton';
import { Container, Row, Col } from 'react-bootstrap';

// Truncation utility functions

// TODO: move this to a config file?
const maxCharLength = 400;

/**
 * Determines whether the given string needs to be truncated. Any string
 * greater than default 400 characters requires truncation 
 */
const requiresTruncation = (input) => input.length > maxCharLength; 

/**
 * If the string requires truncation, returns a string truncated at 400 characters
 * and with ellipses appended, otherwise returns the same input string 
 */
const truncate = (input) => input.length > maxCharLength ? `${input.substring(0, maxCharLength)}...` : input;

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
                                <ReactMarkdown>
                                    {eachProject.description}
                                </ReactMarkdown>
                            )}    
                        </Typography>
                        <Container>
                            <Row>
                                {eachProject.furtherLinks.map((eachLink) => (
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <NeonButton link={eachLink.link}>
                                            {eachLink.label}
                                        </NeonButton>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </ProjectCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
