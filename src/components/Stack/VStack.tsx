import React from "react";
import styles from "./Stack.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    rowGap?: number;
}

const VStack: React.FC<Props> = ({ children, rowGap }) => {
    return (
        <div role="presentation" className={styles.vertical} style={{ rowGap }}>
            {React.Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    );
};

export default VStack;
