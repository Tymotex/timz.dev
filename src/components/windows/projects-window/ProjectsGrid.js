import {
    Grid, Typography
} from '@material-ui/core';
import React from 'react';
import { ProjectCard } from './project-card';
import ReactMarkdown from 'react-markdown';
import NeonButton from '../../buttons/neon-button/NeonButton';
import { Container, Row, Col } from 'react-bootstrap';
import { truncate, requiresTruncation } from './truncation.js';

/**
 * Given an array of objects of shape: { link, label }, returns an array of
 * Col Neon Button components that aims to fit the full number of columns when
 * a button exists in its own row 
 */
const renderButtonGrid = (buttonDataArr) => {
    if (!buttonDataArr || buttonDataArr.length <= 0) {
        return [];
    } else if (buttonDataArr.length === 1) {
        // Return a list containing one element taking up maximum grid columns (12)
        return [
            <Col xs={12} xl={12}>
                <NeonButton link={buttonDataArr[0].link}>
                    {buttonDataArr[0].label}
                </NeonButton>
            </Col>
        ];
    } else {
        // Render two buttons and recursively build the remaining array of buttons
        const { link: firstLink, label: firstLabel } = buttonDataArr[0];
        const { link: secondLink, label: secondLabel } = buttonDataArr[1];
        return [
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <NeonButton link={firstLink}>
                    {firstLabel}
                </NeonButton>
            </Col>,
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <NeonButton link={secondLink}>
                    {secondLabel}
                </NeonButton>
            </Col>,
            ...renderButtonGrid(buttonDataArr.slice(2))
        ];
    }
};

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
                                {/* Rendering a full-width button if there exists only 1 element */}
                                {renderButtonGrid(eachProject.furtherLinks)}
                            </Row>
                        </Container>
                    </ProjectCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
