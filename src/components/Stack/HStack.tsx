import React from "react";
import styles from "./Stack.module.scss";
import { StackProps } from "./Stack";

const HStack: React.FC<StackProps> = ({
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
