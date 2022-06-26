import React from "react";
import styles from "./Copyright.module.scss";

interface Props {}

const Copyright: React.FC<Props> = () => {
    return (
        <small className={styles.copyright}>
            &copy; <em>2022 Tim Zhang.</em>
        </small>
    );
};

export default Copyright;
