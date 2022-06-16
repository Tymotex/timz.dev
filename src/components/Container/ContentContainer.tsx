import React from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
    children: React.ReactNode;
    maxWidth?: string | number;
}

const ContentContainer: React.FC<Props> = ({ children, maxWidth }) => {
    return (
        <div
            role="presentation"
            className={styles.contentContainer}
            style={{
                maxWidth: maxWidth || 800,
            }}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
