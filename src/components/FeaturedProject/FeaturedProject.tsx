import React from "react";
import { Button } from "../Button";
import ChipGroup from "../ChipGroup";
import { Technology } from "../ChipGroup/technologies";
import { MiniDivider } from "../Divider";
import styles from "./FeaturedProject.module.scss";
import {
    MdOutlineArrowRightAlt as RightArrowIcon,
    MdOutlineOpenInNew as DemoIcon,
} from "react-icons/md";
import { FiGithub as GitHubIcon } from "react-icons/fi";
import Link from "next/link";

export interface Project {
    title: string;
    headline: string;
    description: string;
    technologies: Technology[];
    githubUrl?: string;
    demoUrl?: string;
}

interface Props {
    project: Project;
    position?: "left" | "right";
}

const FeaturedProject: React.FC<Props> = ({ project, position = "left" }) => {
    return (
        <div className={styles.featuredProject}>
            <div className={styles.details}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.headline}>{project.headline}</p>
                <ChipGroup
                    technologies={project.technologies}
                    position={position}
                />
                <MiniDivider position={position} />
                <p className={styles.description}>{project.description}</p>

                <div className={styles.buttonGroup}>
                    <Button
                        callToAction={true}
                        shape={"pill"}
                        text={"Read more"}
                        icon={<RightArrowIcon />}
                        iconPosition={"right"}
                        iconInset={true}
                        internalUrl={"/"}
                    />
                    <div className={styles.externalLinkButtons}>
                        <Button
                            text="GitHub"
                            icon={<GitHubIcon />}
                            iconPosition="left"
                            externalUrl={project.githubUrl}
                        />
                        <Button
                            text="Demo"
                            icon={<DemoIcon />}
                            iconPosition="left"
                            externalUrl={project.demoUrl}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.demo}>
                <img className={styles.image} src="/og-image.avif" />
            </div>
        </div>
    );
};

export default FeaturedProject;
