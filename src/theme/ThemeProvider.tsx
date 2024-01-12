import { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme: Theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === Theme.Light ? Theme.Dark : Theme.Light
        );
    };

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme: toggleTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
