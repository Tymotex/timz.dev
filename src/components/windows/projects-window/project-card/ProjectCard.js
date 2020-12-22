import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import windowStyles from '../../Window.module.scss';
import { TechnologyList } from './technologies-list';
import HoverOverlay from './HoverOverlay.js';

const ProjectCard = ({ project, children }) => {
    const { 
        title,
        thumbnail,
        technologies,
        overlay
    } = project; 
    return (
        <Card className={windowStyles.projectCard}>
            <CardActionArea>
                <a href="https://www.google.com">
                    <div className={windowStyles.cardImage}>
                        <div className={windowStyles.image}>
                            <CardMedia
                                component="img"
                                alt="Project"
                                height="140"
                                image={thumbnail}
                                title="Project"
                            />
                        </div>
                        <HoverOverlay 
                            icon={overlay.icon} 
                            label={overlay.label}
                        />
                    </div>
                </a>
            </CardActionArea>
            <CardContent className={windowStyles.cardContent}>
                <Typography className={windowStyles.projectTitle} gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <hr className={windowStyles.thinHr} />
                {children}
                {technologies && technologies.length > 0 && (
                    <>
                        <hr className={windowStyles.thinHr} />
                        <TechnologyList technologies={technologies}/>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
