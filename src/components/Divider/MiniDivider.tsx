import React from "react";
import styles from "./MiniDivider.module.scss";

interface Props {
    position?: "left" | "right" | "center";
    className?: string;
}

const MiniDivider: React.FC<Props> = ({ position = "left", className }) => {
    const positionClass =
        position === "left"
            ? styles.left
            : position === "right" && styles.right;
    return (
        <hr className={`${styles.miniDivider} ${positionClass} ${className}`} />
    );
};

export default MiniDivider;
