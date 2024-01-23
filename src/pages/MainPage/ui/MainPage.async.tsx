import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(import("./MainPage") as Promise<{ default: never }>),
        3000
      );
    })
);
