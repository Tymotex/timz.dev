import { Project } from "content/portfolio/portfolio";
import Image from "next/image";
import React from "react";
import { AiOutlineYoutube as YouTubeIcon } from "react-icons/ai";
import { FiGithub as GithubIcon } from "react-icons/fi";
import {
    MdOutlineArrowRightAlt as RightArrowIcon,
    MdOutlineOpenInNew as DemoIcon,
} from "react-icons/md";
import { Button } from "../Button";
import { SubtleDivider } from "../Divider";
import styles from "./ProjectCard.module.scss";

interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className={styles.projectCard} data-testid={"other-project-card"}>
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
                    <h2 className={styles.title}>{project.title}</h2>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.buttonGroup}>
                        <Button
                            text="Read more"
                            ariaLabel="Read more"
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
                                    ariaLabel="open GitHub repo"
                                    shape="pill"
                                    colour="secondary"
                                    icon={<GithubIcon />}
                                    externalUrl={project.githubUrl}
                                />
                            )}
                            {project.demoUrl && (
                                <Button
                                    text=""
                                    ariaLabel="open demo"
                                    shape="pill"
                                    colour="secondary"
                                    icon={<DemoIcon />}
                                    externalUrl={project.demoUrl}
                                />
                            )}
                            {project.videoUrl && (
                                <Button
                                    text=""
                                    ariaLabel="open video demo"
                                    shape="pill"
                                    colour="secondary"
                                    icon={<YouTubeIcon />}
				    externalUrl={project.videoUrl}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <SubtleDivider />
                <small className={styles.builtWith}>
                    <strong>Built with: </strong>
                    {project.technologies.join(", ")}
                </small>
            </div>
        </div>
    );
};

export default ProjectCard;
