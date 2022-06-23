import React from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
    children: React.ReactNode;
    width?: string | number;
    maxWidth?: string | number;
    centerContents?: boolean;
    disableHighlight?: boolean;
    padding?: string;
}

const ContentContainer: React.FC<Props> = ({
    children,
    width,
    maxWidth,
    centerContents,
    disableHighlight,
    padding,
}) => {
    return (
        <div
            role="presentation"
            className={`${styles.contentContainer} ${
                centerContents && styles.centered
            }`}
            style={{
                width: width || "100%",
                maxWidth: maxWidth || 800,
                userSelect: disableHighlight ? "none" : "text",
                padding,
            }}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
