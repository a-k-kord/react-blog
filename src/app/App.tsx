import { useTheme } from "app/providers/ThemeProvider";
import classnames from "classnames";
import { type FC, Suspense } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router/ui/AppRouter";
import "./styles/index.scss";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classnames("app", theme)}>
            <Suspense
                fallback={
                    <div className="page-wrapper">Loading Language...</div>
                }
            >
                <div className="content-page">
                    <Navbar />
                    <div className="flex-row">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
