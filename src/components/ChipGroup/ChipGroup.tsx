import React from "react";
import styles from "./ChipGroup.module.scss";

type Chip = {
    text: string;
    icon: React.ReactNode;
};

interface Props {
    items: string[] | Chip[];
    position?: "left" | "right" | "center";
    padding?: string;
    invertColour?: boolean;
}

const ChipGroup: React.FC<Props> = ({
    items,
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
            {items &&
                items.map((item) => {
                    return typeof item === "string" ? (
                        <li
                            className={`${styles.chip} ${
                                invertColour ? styles.light : styles.dark
                            }`}
                            key={item}
                            style={{ padding }}
                        >
                            {item}
                        </li>
                    ) : (
                        <li
                            className={`${styles.chip} ${
                                invertColour ? styles.light : styles.dark
                            }`}
                            key={item.text}
                            style={{ padding }}
                        >
                            {item.text}
                            {item.icon}
                        </li>
                    );
                })}
        </ul>
    );
};

export default ChipGroup;
