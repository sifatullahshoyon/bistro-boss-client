import React from "react";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subTitle, longDetails }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
      >
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="mt-7 text-center">
          <button className="btn bg-white text-light-gray outline-none border-0 border-b border-text-light-gray hover:bg-white font-medium font-inter text-xl uppercase shadow-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </>
  );
};

export default MenuCategory;
