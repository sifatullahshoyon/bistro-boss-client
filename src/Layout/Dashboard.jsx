import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosWallet, IoMdHome } from "react-icons/io";
import { FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { VscPreview } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <li>
            <>
              <NavLink to="/">
                <div className="mb-10">
                  <p className="uppercase font-cinzel text-solid text-xl lg:text-3xl font-medium">
                    Bistro Boss
                  </p>
                  <p className="uppercase font-cinzel text-solid text-lg lg:tex-xl font-medium tracking-[.25em]">
                    Restaurant
                  </p>
                </div>
              </NavLink>
            </>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/user-home">
              <IoMdHome /> User Home
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/reservation">
              <SlCalender /> reservation
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/history">
              <IoIosWallet /> payment history
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/my-cart">
              <FaShoppingCart /> My Cart
              <span className="badge badge-success">
              {cart?.length || 0}
            </span>
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/review">
              <VscPreview /> add review
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/dashboard/booking">
              <SlCalender /> my booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <hr className="text-black" />
          <br />
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/">
              <IoMdHome /> Home
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/menu">
              <MdMenu /> Menu
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/order/salad">
              <GiShoppingBag /> shop
            </NavLink>
          </li>
          <li className="uppercase text-solid font-bold font-cinzel text-base">
            <NavLink to="/contact">
              <FaEnvelope /> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
