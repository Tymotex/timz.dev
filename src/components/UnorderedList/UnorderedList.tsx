import styles from "./UnorderedList.module.scss";
import React from "react";

interface Props {
    children: React.ReactNode;
}

// Very simple wrapper around <ul> with standard styling applied.
const UnorderedList: React.FC<Props> = ({ children }) => {
    return <ul className={styles.unorderedList}>{children}</ul>;
};

export default UnorderedList;
