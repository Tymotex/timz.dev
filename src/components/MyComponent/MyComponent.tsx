import React, {FC} from "react";
import styles from "./MyComponent.module.scss";

interface Props {
}

const MyComponent: FC<Props> = () => {
    return <div className={styles.test}>My COMPONENT</div>;
}

export default MyComponent;
