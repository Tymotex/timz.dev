import React, { useContext } from "react";
import {
    BsMoonStarsFill as MoonIcon,
    BsSunFill as SunIcon,
} from "react-icons/bs";
import { ThemeContext } from "src/contexts/ThemeProvider";
import styles from "./DarkModeToggler.module.scss";

interface Props {}

const DarkModeToggler: React.FC<Props> = () => {
    const theme = useContext(ThemeContext);

    return (
        <button
            className={styles.toggler}
            onClick={() => theme.toggleDarkMode()}
            aria-label="Dark mode toggler"
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
