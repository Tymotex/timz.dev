import React from "react";
import styles from "./Stack.module.scss";

const HStack: React.FC<Props> = ({
    children,
    alignItems,
    columnGap,
    rowGap,
    className,
}) => {
    return (
        <div
            role="presentation"
            className={`${styles.horizontal} ${className}`}
            style={{
                alignItems,
                columnGap,
                rowGap,
            }}
        >
            {React.Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    );
};

export default HStack;
