import React from "react";
import styles from "./SubtleDivider.module.scss";

interface Props {}

const SubtleDivider: React.FC<Props> = () => {
    return <hr className={styles.subtleDivider} />;
};

export default SubtleDivider;
