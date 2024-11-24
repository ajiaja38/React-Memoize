import { createBrowserRouter } from "react-router-dom";
import MemoPage from "../pages";
import UseCallBackPage from "../pages/UseCallBackPage";

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
