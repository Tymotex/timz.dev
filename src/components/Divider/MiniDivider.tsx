import React from "react";
import styles from "./MiniDivider.module.scss";

interface Props {}

const MiniDivider: React.FC<Props> = () => {
    return <hr className={styles.miniDivider} />;
};

export default MiniDivider;
