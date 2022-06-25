import portfolio, { Project } from "content/portfolio/portfolio";
import React from "react";
import { useBreakpointTrigger } from "src/hooks/windowHooks";
import FeaturedProject from "./FeaturedProject";
import styles from "./FeaturedProject.module.scss";

interface Props {
    projects: Project[];
}

const FeaturedProjectList: React.FC<Props> = ({ projects }) => {
    const isScreenBelowLg = useBreakpointTrigger(992);
    return (
        <div className={styles.featuredProjectGroup}>
            {projects &&
                projects.map((project, i) => (
                    <FeaturedProject
                        key={project.title}
                        position={
                            isScreenBelowLg
                                ? "left"
                                : i % 2 === 0
                                ? "left"
                                : "right"
                        }
                        project={portfolio.projects.featured[i]}
                    />
                ))}
        </div>
    );
};

export default FeaturedProjectList;
