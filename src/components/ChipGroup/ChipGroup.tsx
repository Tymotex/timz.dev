import Image from "next/image";
import React from "react";
import { Technology } from "./technologies";
import styles from "./ChipGroup.module.scss";

interface Props {
    technologies: Technology[];
}

const ChipGroup: React.FC<Props> = ({ technologies }) => {
    return (
        <ul className={styles.chipStack}>
            {technologies &&
                technologies.map((tech) => (
                    <li className={styles.chip} key={tech}>
                        <Image
                            alt={`${tech} icon`}
                            src={`/icons/${tech}.png`}
                            width={20}
                            height={20}
                        />
                        <span role="listitem">{tech}</span>
                    </li>
                ))}
        </ul>
    );
};

export default ChipGroup;
