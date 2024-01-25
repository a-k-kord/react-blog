import classNames from "classnames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/LanguageSwitcher/LanguageSwitcher";
import SidebarCollapseIcon from "shared/assets/icons/sidebar-collapse.svg";
import SidebarExpandIcon from "shared/assets/icons/sidebar-expand.svg";
import { Button, ThemeButton } from "shared/ui/AppLink/Button/Button";

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
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.toggleSidebar)}
                onClick={toggle}
            >
                {collapsed ? <SidebarExpandIcon /> : <SidebarCollapseIcon />}
            </Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LanguageSwitcher className={classNames(cls.lang)} />
            </div>
        </div>
    );
};
