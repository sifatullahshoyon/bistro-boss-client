import React from "react";

const FoodCard = ({ item }) => {
  const { _id, image, recipe, name, price } = item;
  return (
    <div className="card bg-[#F3F3F3]">
      <figure>
        <img
          src={image ? image : "Image Not Found"}
          className="object-cover w-full"
          alt="item img"
        />
        {price && (
          <button className="btn btn-neutral absolute right-3 top-3 text-white">
            ${price ? price : "00.0"}
          </button>
        )}
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto text-solid font-inter text-2xl font-semibold">
          {name ? name : "Data Not Found"}
        </h2>
        <p className="text-base font-normal font-inter text-solid">
          {recipe ? recipe : "Data Not Found"}
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-[#F3F3F3] text-dark-yellow outline-none border-0 border-b-2 border-dark-yellow font-medium font-inter text-xl uppercase shadow-lg">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
