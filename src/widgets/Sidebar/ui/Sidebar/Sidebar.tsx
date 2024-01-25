import classNames from "classnames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, className, {
                [cls.collapsed]: collapsed,
            })}
        >
            <button onClick={toggle}>toggle</button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LanguageSwitcher className={classNames(cls.lang)} />
            </div>
        </div>
    );
};
