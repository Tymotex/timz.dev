import React, { useContext } from "react";
import {
    BsMoonStarsFill as MoonIcon,
    BsSunFill as SunIcon,
} from "react-icons/bs";
import { DarkModeContext } from "src/contexts/LightDarkThemeProvider";
import styles from "./DarkModeToggler.module.scss";

interface Props {}

const DarkModeToggler: React.FC<Props> = () => {
    const theme = useContext(DarkModeContext);

    return (
        <button
            className={styles.toggler}
            onClick={() => theme.toggleDarkMode()}
        >
            {theme.isDarkMode ? (
                <MoonIcon className={styles.moon} size={32} />
            ) : (
                <SunIcon className={styles.sun} size={32} />
            )}
        </button>
    );
};

export default DarkModeToggler;
