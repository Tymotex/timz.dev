import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ProjectCard } from './project-card';
import NeonButton from 'src/components/buttons/neon-button/NeonButton';
import windowStyles from '../Window.module.scss';
import utils from 'src/portfolio-data/utils';

/**
 * Given an array of objects of shape: { link, label }, returns an array of
 * Col Neon Button components that aims to fit the full number of columns when
 * a button exists in its own row
 */
const renderButtonGrid = buttonDataArr => {
    if (!buttonDataArr || buttonDataArr.length <= 0) {
        return [];
    } else if (buttonDataArr.length === 1) {
        // Return a list containing one element taking up maximum grid columns (12)
        return [
            <Grid item xs={12} xl={12}>
                <NeonButton link={buttonDataArr[0].link}>{buttonDataArr[0].label}</NeonButton>
            </Grid>,
        ];
    } else {
        // Render two buttons and recursively build the remaining array of buttons
        const { link: firstLink, label: firstLabel } = buttonDataArr[0];
        const { link: secondLink, label: secondLabel } = buttonDataArr[1];
        return [
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <NeonButton link={firstLink}>{firstLabel}</NeonButton>
            </Grid>,
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <NeonButton link={secondLink}>{secondLabel}</NeonButton>
            </Grid>,
            ...renderButtonGrid(buttonDataArr.slice(2)),
        ];
    }
};

const ProjectsGrid = ({ projects }) => {
    return (
        <Grid container spacing={3}>
            {projects.map(eachProject => (
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard project={eachProject}>
                        <Typography variant="body2" component="p">
                            <div
                                className={windowStyles.descriptionContainer}
                                dangerouslySetInnerHTML={{
                                    __html: eachProject.description,
                                }}
                            />
                            <a
                                className={windowStyles.readMore}
                                href={`${process.env.BASE_URL}/blogs/${utils.convertValidURL(
                                    eachProject.title
                                )}`}
                                target="blank"
                            >
                                {' '}
                                {/* TODO: Add blog URL */}
                                <strong>Read more</strong>
                            </a>
                        </Typography>
                        <Grid container className={windowStyles.buttonGrid}>
                            {/* Rendering a full-width button if there exists only 1 element */}
                            {renderButtonGrid(eachProject.furtherLinks)}
                        </Grid>
                    </ProjectCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
