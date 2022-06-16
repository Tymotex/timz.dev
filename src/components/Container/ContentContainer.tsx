import React from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
    children: React.ReactNode;
    maxWidth?: string | number;
    centerContents?: boolean;
}

const ContentContainer: React.FC<Props> = ({
    children,
    maxWidth,
    centerContents,
}) => {
    return (
        <div
            role="presentation"
            className={styles.contentContainer}
            style={{
                maxWidth: maxWidth || 800,
                textAlign: centerContents ? "center" : "left",
            }}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
