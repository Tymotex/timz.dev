import React from "react";
import styles from "./Stack.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    rowGap?: number;
    alignItems: "flex-end" | "center" | "flex-start";
}

const VStack: React.FC<Props> = ({ children, rowGap, alignItems }) => {
    return (
        <div
            role="presentation"
            className={styles.vertical}
            style={{ rowGap, alignItems }}
        >
            {React.Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    );
};

export default VStack;
