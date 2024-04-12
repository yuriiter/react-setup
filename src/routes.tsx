import { RouteObject } from "react-router-dom";
import { Home } from "./views/Home";
import { MainLayout } from "./layouts/MainLayout";
import { NotFound } from "./views/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
