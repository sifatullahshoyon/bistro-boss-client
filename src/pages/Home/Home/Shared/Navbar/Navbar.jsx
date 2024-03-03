import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import shoppingIcon from "../../../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { AuthContext } from "../../../../../providers/AuthProvider";
import useCart from "../../../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };
  const navItem = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "default" : "active")}
        >
          HOME
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "default" : "active")}
        >
          CONTACT US
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "default" : "active")}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "default" : "active")}
        >
          OUR MENU
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/order/salad"
          className={({ isActive }) => (isActive ? "default" : "active")}
        >
          OUR SHOP
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/"
          // className={({ isActive }) => (isActive ? "default" : "active")}
        >
          <button className="btn relative h-8">
            <FaShoppingCart className="text-3xl text-white" />
            <div className="badge badge-success absolute bottom-0 right-0">
              {cart?.length || 0}
            </div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="mr-2">
            <NavLink
              to="/login"
              onClick={handleLogout}
              className={({ isActive }) => (isActive ? "default" : "active")}
            >
              SIGN OUT
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="mr-2">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "default" : "active")}
            >
              SIGN IN
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="">
      <div className="fixed z-10 w-full bg-solid bg-opacity-30">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-my-bg rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <Link to="/">
              <div>
                <p className="uppercase font-cinzel text-white text-xl lg:text-3xl font-medium">
                  Bistro Boss
                </p>
                <p className="uppercase font-cinzel text-white text-lg lg:tex-xl font-medium tracking-[.25em]">
                  Restaurant
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex"></div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
            {/* <FiShoppingBag className="text-2xl text-my-gray mr-5" /> */}
            {/* <IoSearchOutline className="text-2xl text-my-gray mr-5" /> */}

            {/* <div className="ml-2">
          {user?.email ? <>
          <button className="btn btn-info mr-2"><Link to='/bookings'>My Bookings</Link></button>
            <button onClick={handleSignOut} className="btn btn-primary">Log out </button>
          </> : <button className="btn btn-primary"><Link to='/login'>Sign In</Link></button>}
          </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
