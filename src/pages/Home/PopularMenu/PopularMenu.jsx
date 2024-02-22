import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(`data/menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const menuItem = data?.filter((item) => item.category === "popular");
        setMenu(menuItem);
      });
  }, []);
  return (
    <section className="py-20 px-5">
      <div>
        <SectionTitle
          subHeading="Check it out"
          heading="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
      >
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="mt-7 text-center">
        <button className="btn bg-white text-light-gray outline-none border-0 border-b border-text-light-gray hover:bg-white font-medium font-inter text-xl uppercase shadow-lg">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
