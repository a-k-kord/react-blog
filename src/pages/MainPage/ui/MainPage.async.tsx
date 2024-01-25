import { lazy } from "react";

export const MainPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(
                () => { resolve(import("./MainPage") as Promise<{ default: never }>); },
                3000
            );
        })
);
