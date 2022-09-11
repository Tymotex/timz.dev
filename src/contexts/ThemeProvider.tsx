import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import gradientThemes from "src/components/Particles/themes";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export interface ThemeContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    particleThemeIndex: number;
    changeParticleThemeIndex: (newThemeIndex: number) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleDarkMode: () => console.error("Dark mode toggler callback not set."),
    particleThemeIndex: 0,
    changeParticleThemeIndex: (i) =>
        console.error("Particle theme index setter not set."),
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [particleThemeIndex, setParticleThemeIndex] = useState<number>(
        Math.floor(Math.random() * gradientThemes.length),
    );

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("isDarkMode") === "true");
    }, []);

    const toggleDarkMode = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("isDarkMode", (!isDarkMode).toString());
            setIsDarkMode(!isDarkMode);
        }
    }, [isDarkMode]);

    const changeParticleThemeIndex = useCallback(
        (newThemeIndex: number) => {
            if (newThemeIndex < 0 || newThemeIndex >= gradientThemes.length) {
                throw new Error(
                    `Invalid theme index selected: ${newThemeIndex}`,
                );
            }
            setParticleThemeIndex(newThemeIndex);
        },
        [setParticleThemeIndex],
    );

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                toggleDarkMode,
                particleThemeIndex,
                changeParticleThemeIndex,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * @returns Whether dark mode is active for this user.
 */
export const useDarkMode = (): boolean => {
    const theme = useContext(ThemeContext);
    return theme.isDarkMode;
};
