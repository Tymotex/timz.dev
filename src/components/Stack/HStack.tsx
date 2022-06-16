import React from "react";
import styles from "./Stack.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    alignItems?: "center" | "flex-end" | "flex-start";
    columnGap?: number;
    rowGap?: number;
}

const HStack: React.FC<Props> = ({
    children,
    alignItems,
    columnGap,
    rowGap,
}) => {
    return (
        <div
            role="presentation"
            className={styles.horizontal}
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
