import classNames from "classnames";
import cls from './<FTName | capitalize>.module.scss';

interface <FTName | capitalize>Props {
    className?: string;
}

export const <FTName | capitalize> = ({className}: <FTName | capitalize>Props) => {
    return (
        <div className={classNames(cls.<FTName | camelcase>, className)}>

        </div>
    );
};
