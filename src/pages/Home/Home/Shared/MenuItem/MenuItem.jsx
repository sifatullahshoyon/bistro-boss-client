import React from "react";

const MenuItem = ({ item }) => {
  const { _id, image, price, recipe, name } = item;
  return (
    <div className="flex gap-5 mb-4">
      <figure>
        <img
          src={image ? image : "Image Not Found"}
          className="menuItemImg"
          alt="item img"
        />
      </figure>
      <div>
        <h4 className="font-cinzel text-xl font-normal text-black">
          {name ? name : "Data Not Found"} ------------------
        </h4>
        <p className="text-base font-inter font-normal text-[#737373]">
          {recipe ? recipe : "Data Not Found"}
        </p>
      </div>
      <div>
        <p className="text-xl font-inter font-normal text-dark-yellow">
          ${price ? price : "00.0"}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
