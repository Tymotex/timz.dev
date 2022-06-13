import React from "react";
import styles from "./CentralContainer.module.scss";

interface Props {
    children: React.ReactNode;
}

const CentralContainer: React.FC<Props> = ({ children }) => {
    return <div className={styles.centralContainer}>{children}</div>;
};

export default CentralContainer;
