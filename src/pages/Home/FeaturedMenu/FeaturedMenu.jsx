import React from "react";
import "./FeaturedMenu.css";
import Img from "../../../assets/home/featured.jpg";

const FeaturedMenu = () => {
  return (
    <section className="py-20">
      <div className="featureImg">
        <div className="container mx-auto ">
          <div className="text-center pt-28 pb-10 w-4/12 mx-auto">
            <p className="text-dark-yellow italic text-xl font-inter pb-2">
              --- Check it out ---
            </p>
            <h3 className="text-white text-4xl border-y-2 p-2 mb-5 font-medium font-inter">
              FROM OUR MENU
            </h3>
          </div>
          <div className="md:flex justify-between  h-[850px] px-28">
            <div className="text-right flex-auto lg:w-1/2 w-full">
              <img
                src={Img}
                alt=""
                className="h-[400px] float-right object-cover"
              />
            </div>
            <div className="lg:w-[604px] w-full pl-10 lg:pt-11 overflow-auto">
              <p className="font-inter font-normal text-2xl text-white">
                March 20, 2023
              </p>
              <p className="font-inter font-normal text-2xl text-white">
                WHERE CAN I GET SOME?
              </p>
              <p className="font-inter font-normal text-xl text-white pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn bg-transparent text-white outline-none border-0 border-b-2 border-white hover:bg-transparent hover:border-white  font-semibold font-inter text-xl uppercase shadow-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
