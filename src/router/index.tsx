/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import MemoPage from "../pages";
import { lazy } from "react";

const UseCallBackPage = lazy(() => import("../pages/UseCallBackPage"));

const routers: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    element: <MemoPage />,
    path: "/",
  },
  {
    element: <UseCallBackPage />,
    path: "/use-callback",
  },
]);

export default routers;
