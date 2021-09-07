import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import windowStyles from 'src/components/windows/Window.module.scss';
import { TechnologyList } from './technologies-list';
import HoverOverlay from './HoverOverlay.js';
import TagList from './TagList';

const ProjectCard = ({ project, children }) => {
    const { title, thumbnail, technologies, overlay, gif } = project;
    return (
        <Card className={windowStyles.projectCard}>
            <CardActionArea>
                <a href={overlay.link}>
                    <div className={windowStyles.cardImage}>
                        <HoverOverlay
                            style={{ height: '140px', 'z-index': '10', 'pointer-events': 'none' }}
                            icon={overlay.icon}
                            label={overlay.label}
                        />
                        <div className={windowStyles.image}>
                            {gif ? (
                                <>
                                    <CardMedia
                                        className={windowStyles.staticImage}
                                        component="img"
                                        alt="Project"
                                        height="140"
                                        image={thumbnail}
                                        title="Project"
                                    />
                                    <CardMedia
                                        className={windowStyles.gifUnderlay}
                                        component="img"
                                        alt="Project"
                                        height="140"
                                        image={gif}
                                        title="Project"
                                    />
                                </>
                            ) : (
                                <CardMedia
                                    component="img"
                                    alt="Project"
                                    height="140"
                                    image={thumbnail}
                                    title="Project"
                                />
                            )}
                        </div>
                    </div>
                </a>
            </CardActionArea>
            <CardContent className={windowStyles.cardContent}>
                <Typography
                    className={windowStyles.projectTitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {title}
                </Typography>
                <TagList tags={project.tags} />
                <hr className={windowStyles.thinHr} />
                {children}
                {technologies && technologies.length > 0 && (
                    <>
                        <hr className={windowStyles.thinHr} />
                        <TechnologyList technologies={technologies} />
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
