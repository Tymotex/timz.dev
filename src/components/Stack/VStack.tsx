import React from "react";
import styles from "./Stack.module.scss";
import { StackProps } from "./Stack";

const VStack: React.FC<StackProps> = ({ children, rowGap, alignItems }) => {
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
