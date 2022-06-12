import React, { useContext } from "react";
import { DarkModeContext } from "src/contexts/LightDarkThemeProvider";

interface Props {}

const DarkModeToggler: React.FC<Props> = () => {
    const theme = useContext(DarkModeContext);

    return (
        <button onClick={() => theme.toggleDarkMode()}>Toggle Dark Mode</button>
    );
};

export default DarkModeToggler;
