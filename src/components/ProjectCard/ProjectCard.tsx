import Image from "next/image";
import React from "react";
import { Button } from "../Button";
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
                    src="/og-image.avif"
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
                        />
                        <div className={styles.externalLinksGroup}>
                            <Button
                                text=""
                                shape="pill"
                                type="secondary"
                                icon={<GithubIcon />}
                            />
                            <Button
                                text=""
                                shape="pill"
                                type="secondary"
                                icon={<DemoIcon />}
                            />
                        </div>
                    </div>
                </div>
                <SubtleDivider />
                <small className={styles.builtWith}>
                    <strong>Built with: </strong>
                    <em>
                        React, Vue, Angular, Typescript, C++, Rust, Golang, C,
                        Docker, AWS, Other stuff.
                    </em>
                </small>
            </div>
        </div>
    );
};

export default ProjectCard;
