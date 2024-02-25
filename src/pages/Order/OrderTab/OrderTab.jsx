import React from "react";
import FoodCard from "../../Home/Home/Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-5"
    >
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
