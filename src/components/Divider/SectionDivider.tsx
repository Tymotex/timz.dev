import React from "react";
import styles from "./SectionDivider.module.scss";

interface Props {
    text: string;
}

const SectionDivider: React.FC<Props> = ({ text }) => {
    return (
        <div role="presentation" className={styles.sectionDivider}>
            <div
                role="presentation"
                className={`${styles.divider} ${styles.leftDivider}`}
            />
            <h1 className={styles.centralText}>{text}</h1>
            <div
                role="presentation"
                className={`${styles.divider} ${styles.rightDivider}`}
            />
        </div>
    );
};

export default SectionDivider;
