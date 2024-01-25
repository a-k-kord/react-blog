import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/AppLink/Button/Button";
import cls from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({
    className,
}: LanguageSwitcherProps): JSX.Element => {
    const { i18n } = useTranslation();

    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en").catch(
            (err) => {
                console.log(err);
            }
        );
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
