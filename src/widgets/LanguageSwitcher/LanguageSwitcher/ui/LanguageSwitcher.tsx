import classNames from "classnames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/AppLink/Button/Button";
import LanguageIcon from "shared/assets/icons/language.svg";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.languageSwitcher, className)}
            onClick={toggleLanguage}
        >
            {/* <LanguageIcon /> */}
            {i18n.language === "en" ? "RU" : "EN"}
        </Button>
    );
};
