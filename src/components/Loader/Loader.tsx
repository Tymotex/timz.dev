import React from "react";
import styles from "./Loader.module.scss";

interface Props {}

const Loader: React.FC<Props> = () => {
    return <div className={styles.loader}>Loading...</div>;
};

export default Loader;
