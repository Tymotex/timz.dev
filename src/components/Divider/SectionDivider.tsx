import React from "react";
import styles from "./SectionDivider.module.scss";

interface Props {
    text: string;
}

const SectionDivider: React.FC<Props> = ({ text }) => {
    return (
        <div role="presentation" className={styles.sectionDivider}>
            <div className={`${styles.divider} ${styles.leftDivider}`} />
            <div className={styles.centralText}>{text}</div>
            <div className={`${styles.divider} ${styles.rightDivider}`} />
        </div>
    );
};

export default SectionDivider;
