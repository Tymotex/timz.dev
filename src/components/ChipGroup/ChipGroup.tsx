import Image from "next/image";
import React from "react";
import { Technology } from "./technologies";
import styles from "./ChipGroup.module.scss";

interface Props {
    items: string[];
    position?: "left" | "right" | "center";
    padding?: string;
}

const ChipGroup: React.FC<Props> = ({ items, position = "left", padding }) => {
    const positionClass =
        position === "left"
            ? styles.left
            : position === "right"
            ? styles.right
            : position === "center" && styles.center;
    return (
        <ul className={`${styles.chipStack} ${positionClass}`}>
            {items &&
                items.map((item) => (
                    <li className={styles.chip} key={item} style={{ padding }}>
                        {item}
                    </li>
                ))}
        </ul>
    );
};

export default ChipGroup;
