import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
    const {t} = useTranslation();
    
    return (
        <div className={classNames(cls.navbar, className)}>

            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={classNames(cls.mainLink)}
                >
                    {t("Main")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("About Us")}
                </AppLink>
            </div>
        </div>
    );
};
