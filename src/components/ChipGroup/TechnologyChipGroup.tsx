import Image from "next/image";
import React from "react";
import { Technology } from "./technologies";
import styles from "./ChipGroup.module.scss";

interface Props {
    technologies: Technology[];
    position?: "left" | "right" | "center";
    padding?: string;
    invertColour?: boolean;
}

const TechnologyChipGroup: React.FC<Props> = ({
    technologies,
    position = "left",
    padding,
    invertColour = false,
}) => {
    const positionClass =
        position === "left"
            ? styles.left
            : position === "right"
            ? styles.right
            : position === "center" && styles.center;
    return (
        <ul className={`${styles.chipStack} ${positionClass}`}>
            {technologies &&
                technologies.map((tech) => (
                    <li
                        className={`${styles.chip} ${
                            invertColour ? styles.light : styles.dark
                        }`}
                        key={tech}
                        style={{ padding }}
                    >
                        <Image
                            alt={`${tech} icon`}
                            src={`/icons/tech/${encodeURIComponent(
                                tech.toLowerCase(),
                            )}.png`}
                            width={20}
                            height={20}
                        />
                        <span aria-label="technology name">{tech}</span>
                    </li>
                ))}
        </ul>
    );
};

export default TechnologyChipGroup;
