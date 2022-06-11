// A very minimal component used to sanity check MDX bundling, Storybook
// rendering, SCSS styling and other things. Not meant for production!
import React, { FC } from "react";
import styles from "./SampleComponent.module.scss";

interface Props {
    text: string;
    background?: string;
}

const SampleComponent: FC<Props> = ({ text, background }) => {
    return (
        <div
            className={styles.test}
            style={{
                background,
            }}
        >
            {text}
        </div>
    );
};

export default SampleComponent;
