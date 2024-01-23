import classNames from "classnames";
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({className, children, theme, ...otherProps}: ButtonProps) => {
    return (
        <button 
        className={classNames(cls.button, cls[theme], className)}
        {...otherProps}
        >
            {children}
        </button>
    );
};
