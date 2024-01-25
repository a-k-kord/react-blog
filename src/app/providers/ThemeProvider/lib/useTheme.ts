import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface ThemeHook {
    theme?: Theme;
    toggleTheme: () => void;
}

export function useTheme(): ThemeHook {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme && setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
