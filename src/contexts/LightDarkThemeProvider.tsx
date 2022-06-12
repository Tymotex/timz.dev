import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

interface DarkModeProviderProps {
    children: React.ReactNode;
}

export interface DarkModeContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
    isDarkMode: false,
    toggleDarkMode: () => console.error("Dark mode toggler callback not set."),
});

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
    children,
}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("isDarkMode") === "true");
    }, []);

    const toggleDarkMode = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("isDarkMode", (!isDarkMode).toString());
            setIsDarkMode(!isDarkMode);
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider
            value={{
                isDarkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
};

/**
 * @returns Whether dark mode is active for this user.
 */
export const useDarkMode = (): boolean => {
    const theme = useContext(DarkModeContext);
    return theme.isDarkMode;
};
