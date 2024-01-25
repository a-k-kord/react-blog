import { useTranslation } from "react-i18next";

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation("about");

    return (
        <>
            <div>{t("about.About Page")}</div>
            <div>{t("about.About Page Other")}</div>
        </>
    );
};

export default AboutPage;
