import Image from "next/image";
import React from "react";
import { Button, LinkButton } from "../Button";
import styles from "./ProjectCard.module.scss";
import { FiGithub as GithubIcon } from "react-icons/fi";
import {
    MdOutlineArrowRightAlt as RightArrowIcon,
    MdOutlineOpenInNew as DemoIcon,
} from "react-icons/md";
import ContentContainer from "../Container/ContentContainer";
import { SubtleDivider } from "../Divider";
import { Project } from "content/portfolio/portfolio";

interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.thumbnail}>
                <Image
                    src={project.imageUrl}
                    alt={`${project.title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.details}>
                <div className={styles.mainContent}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.buttonGroup}>
                        <Button
                            text="Read more"
                            shape="pill"
                            callToAction
                            icon={<RightArrowIcon />}
                            iconInset
                            internalUrl={`/blogs/projects/${project.blogSlug}`}
                        />
                        <div className={styles.externalLinksGroup}>
                            {project.githubUrl && (
                                <Button
                                    text=""
                                    shape="pill"
                                    colour="secondary"
                                    icon={<GithubIcon />}
                                    externalUrl={project.githubUrl}
                                />
                            )}
                            {project.demoUrl && (
                                <Button
                                    text=""
                                    shape="pill"
                                    colour="secondary"
                                    icon={<DemoIcon />}
                                    externalUrl={project.demoUrl}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <SubtleDivider />
                <small className={styles.builtWith}>
                    <strong>Built with: </strong>
                    <em>{project.technologies.join(", ")}</em>
                </small>
            </div>
        </div>
    );
};

export default ProjectCard;
