import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import windowStyles from "../windows/Window.module.scss";
import githubIcon from "../../images/github-icon.png";

const ProjectCard = ({ projectName, image, children }) => {
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
                image={image}
                title="Project"
                />
            </div>
            <span className={windowStyles.overlay}>
              <img src={githubIcon} />
              <p>
                <strong>
                  View on GitHub
                </strong>
              </p>
            </span>
          </div>
        </a>
      </CardActionArea>
      <CardContent className={windowStyles.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {projectName}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
