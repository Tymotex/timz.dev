import React from "react";
import styles from "./ChipGroup.module.scss";

interface Props {
    items: string[];
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
                items.map((item) => (
                    <li
                        className={`${styles.chip} ${
                            invertColour ? styles.light : styles.dark
                        }`}
                        key={item}
                        style={{ padding }}
                    >
                        {item}
                    </li>
                ))}
        </ul>
    );
};

export default ChipGroup;
