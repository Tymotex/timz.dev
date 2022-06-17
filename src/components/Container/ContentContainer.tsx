import React from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
    children: React.ReactNode;
    width?: string | number;
    maxWidth?: string | number;
    centerContents?: boolean;
    disableHighlight?: boolean;
}

const ContentContainer: React.FC<Props> = ({
    children,
    width,
    maxWidth,
    centerContents,
    disableHighlight,
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
                userSelect: disableHighlight ? "none" : "text",
            }}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
