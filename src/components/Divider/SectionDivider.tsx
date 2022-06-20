import React from "react";
import styles from "./SectionDivider.module.scss";

interface Props {}

const SectionDivider: React.FC<Props> = () => {
    return (
        <div role="presentation" className={styles.sectionDivider}>
            <div className={styles.leftDivider} />
            <div>Central Text</div>
            <div className={styles.rightDivider} />
        </div>
    );
};

export default SectionDivider;
