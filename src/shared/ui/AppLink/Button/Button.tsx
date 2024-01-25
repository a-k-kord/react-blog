import classNames from "classnames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={classNames(cls.button, theme && cls[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
