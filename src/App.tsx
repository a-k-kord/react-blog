import classnames from "classnames";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

type Props = {};


export const App = (props: Props) => {
    const {theme, toggleTheme} = useTheme();
    const unused = 9;

    return (
        <div className={classnames('app', theme)}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
