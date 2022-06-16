import React from "react";
import styles from "./Stack.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    alignItems?: "center" | "flex-end" | "flex-start";
    columnGap?: number;
    rowGap?: number;
    className?: string;
}

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
