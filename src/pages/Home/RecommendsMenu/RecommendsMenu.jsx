import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendsMenuCard from "./RecommendsMenuCard";
import useMenu from "../../../hooks/useMenu";

const RecommendsMenu = () => {
  const [menu] = useMenu();
  const menuItems = menu?.filter((item) => item.category === "salad");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch(`data/menu.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const menuItem = data?.filter((item) => item.category === "salad");
  //       setMenu(menuItem);
  //     });
  // }, []);
  return (
    <section className="py-20 px-5">
      <div className="mb-8">
        <SectionTitle
          subHeading="Should Try"
          heading="CHEF RECOMMENDS"
        ></SectionTitle>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {menuItems?.map((item) => (
          <RecommendsMenuCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecommendsMenu;
