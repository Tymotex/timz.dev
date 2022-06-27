import React, { useCallback, useContext } from "react";
import { DarkModeContext } from "src/contexts/LightDarkThemeProvider";
import {
    BsSunFill as SunIcon,
    BsMoonStarsFill as MoonIcon,
} from "react-icons/bs";
import styles from "./DarkModeToggler.module.scss";

interface Props {}

const DarkModeToggler: React.FC<Props> = () => {
    const theme = useContext(DarkModeContext);

    return (
        <button
            className={styles.toggler}
            onClick={() => theme.toggleDarkMode()}
        >
            {/* Toggle Dark Mode (currently {theme.isDarkMode ? "dark" : "light"}) */}
            {theme.isDarkMode ? <MoonIcon size={32} /> : <SunIcon size={32} />}
        </button>
    );
};

export default DarkModeToggler;
