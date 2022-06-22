import portfolio from "content/portfolio/portfolio";
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectCard.module.scss";

interface Props {}

const ProjectCardDeck: React.FC<Props> = () => {
    return (
        <div style={{ display: "block", margin: "0 auto" }}>
            <div className={styles.projectCardDeck}>
                <ProjectCard project={portfolio.projects.featured.tactileDs} />
                <ProjectCard project={portfolio.projects.featured.tactileDs} />
                <ProjectCard project={portfolio.projects.featured.tactileDs} />
                <ProjectCard project={portfolio.projects.featured.tactileDs} />
            </div>
        </div>
    );
};

export default ProjectCardDeck;
