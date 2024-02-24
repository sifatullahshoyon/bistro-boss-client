import React from "react";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
      >
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
