import { useTheme } from "app/providers/ThemeProvider";
import classNames from "classnames";
import ThemeIcon from "shared/assets/icons/theme.svg";
import { Button, ThemeButton } from "shared/ui/AppLink/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({
    className,
}: ThemeSwitcherProps): JSX.Element => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, className)}
            onClick={toggleTheme}
        >
            <ThemeIcon />
        </Button>
    );
};
