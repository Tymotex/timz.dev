import React from "react";
import styles from "./MiniDivider.module.scss";

interface Props {
    position?: "left" | "right" | "center";
}

const MiniDivider: React.FC<Props> = ({ position = "left" }) => {
    const positionClass =
        position === "left"
            ? styles.left
            : position === "right" && styles.right;
    return <hr className={`${styles.miniDivider} ${positionClass}`} />;
};

export default MiniDivider;
