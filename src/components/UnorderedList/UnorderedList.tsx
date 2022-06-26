import styles from "./UnorderedList.module.scss";
import React from "react";

interface Props {
    children: React.ReactNode;
    resetDefaultStyle?: boolean;
}

// Very simple wrapper around <ul> with standard styling applied.
const UnorderedList: React.FC<Props> = ({
    children,
    resetDefaultStyle = false,
}) => {
    return (
        <ul
            className={`${styles.unorderedList} ${
                resetDefaultStyle && styles.reset
            }`}
        >
            {children}
        </ul>
    );
};

export default UnorderedList;
