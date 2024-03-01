import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Home/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const isLogin =
    location.pathname.includes("login") ||
    location.pathname.includes("registration");
  return (
    <>
      {isLogin || <Navbar />}
      <div className="min-h-[calc(100vh-544px)]">
        <Outlet />
      </div>
      {isLogin || <Footer />}
    </>
  );
};

export default MainLayout;
