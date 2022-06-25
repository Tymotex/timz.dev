import portfolio, { Project } from "content/portfolio/portfolio";
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectCard.module.scss";

interface Props {
    projects: Project[];
}

const ProjectCardDeck: React.FC<Props> = ({ projects }) => {
    return (
        <div style={{ display: "block", margin: "0 auto" }}>
            <div className={styles.projectCardDeck}>
                {projects &&
                    projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
            </div>
        </div>
    );
};

export default ProjectCardDeck;
