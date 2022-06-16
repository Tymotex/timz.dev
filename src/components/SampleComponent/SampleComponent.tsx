// A very minimal component used to sanity check MDX bundling, Storybook
// rendering, SCSS styling and other things. Not meant for production!
import { FC } from "react";
import { useDarkMode } from "src/contexts/LightDarkThemeProvider";
import styles from "./SampleComponent.module.scss";

interface Props {
    text: string;
    background?: string;
}

const SampleComponent: FC<Props> = ({ text, background }) => {
    const isDarkMode = useDarkMode();

    return (
        <div
            role="presentation"
            className={`${styles.test} ${
                isDarkMode ? styles.dark : styles.light
            }`}
            style={{
                background,
            }}
            data-testid="sample-component"
        >
            {text}
        </div>
    );
};

export default SampleComponent;
