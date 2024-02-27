import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";

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
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/order/:category',
          element : <Order />
        },
      ],
    },
  ]);

export default router;