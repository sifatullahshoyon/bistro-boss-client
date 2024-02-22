import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children : [
        {
            path : "",
            element : <Home />
        },
        {
          path : '/menu',
          element : <Menu />
        },
      ],
    },
  ]);

export default router;