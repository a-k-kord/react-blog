import classNames from "classnames";
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(cls.footer, className)}>

        </div>
    );
};
