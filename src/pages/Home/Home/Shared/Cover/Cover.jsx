import React from "react";

const Cover = ({ bgImg, title, subTitle, details }) => {
  return (
    <div
      className=" bg-center bg-cover grid w-full h-[700px]"
      style={{ backgroundImage: `url("${bgImg}")` }}
    >
      <div className="text-center p-10 grid items-center">
        <div className="h-[450px] bg-solid lg:px-20 sm:px-2 mx-auto w-8/12 lg:pt-36 sm:pt-5 bg-opacity-60">
          <h1 className="font-cinzel font-bold sm:text-xl md:text-2xl lg:text-7xl uppercase text-white pb-4 tracking-wide">
            {title}
          </h1>
          <h2>{subTitle}</h2>
          <p className="mb-5 font-cinzel font-semibold text-base lg:text-2xl text-white">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
