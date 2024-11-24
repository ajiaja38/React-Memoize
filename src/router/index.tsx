import { createBrowserRouter } from "react-router-dom";
import MemoPage from "../pages";
import UseMemoPage from "../pages/UseMemoPage";

const routers: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    element: <MemoPage />,
    path: "/",
  },
  {
    element: <UseMemoPage />,
    path: "/use-memo",
  },
]);

export default routers;
