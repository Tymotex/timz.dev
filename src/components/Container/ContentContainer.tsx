import React from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
    children: React.ReactNode;
    width?: string | number;
    maxWidth?: string | number;
    centerContents?: boolean;
}

const ContentContainer: React.FC<Props> = ({
    children,
    width,
    maxWidth,
    centerContents,
}) => {
    return (
        <div
            role="presentation"
            className={`${styles.contentContainer} ${
                centerContents && styles.centered
            }`}
            style={{
                width: width || 800,
                maxWidth: maxWidth || 800,
            }}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
