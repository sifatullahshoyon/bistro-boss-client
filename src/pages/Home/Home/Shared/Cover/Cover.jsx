import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, subTitle, details, longDetails }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className=" bg-center bg-cover grid w-full h-[700px]"
        //   style={{ backgroundImage: `url("${bgImg}")` }}
      >
        <div className="text-center p-10 grid items-center">
          <div className="h-[450px] bg-solid lg:px-20 sm:px-2 mx-auto w-8/12 lg:pt-36 sm:pt-5 bg-opacity-60">
            <h1 className="font-cinzel font-bold sm:text-xl md:text-2xl lg:text-7xl uppercase text-white pb-4 tracking-wide">
              {title}
            </h1>
            <p className="mb-5 font-cinzel font-semibold text-base lg:text-2xl text-white">
              {details}
            </p>
            <h2 className="font-cinzel font-semibold text-white text-xl md:text-2xl lg:text-4xl tracking-wide pb-4">
              {subTitle}
            </h2>
            <p className="font-inter font-semibold text-base text-white">
              {longDetails}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
