import classNames from "classnames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
}: AppLinkProps) => {
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, className, cls[theme])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
