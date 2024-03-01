import React from "react";

const LocationBox = ({ icon, title, subTitle, anotherTitle }) => {
  return (
    <div className="w-[425px]  h-[300px] bg-white border">
      <div className="w-full py-5 bg-dark-yellow">
        <p className="text-white text-2xl flex justify-center items-center">
          {icon}
        </p>
      </div>
      <div className="pt-4 bg-[#F3F3F3] h-[200px] text-center mx-5">
        <p className="font-medium font-inter text-2xl text-solid uppercase pb-2">
          {title}
        </p>
        <p className="font-inter font-normal text-base text-light-gray">
          {subTitle}
        </p>
        <p className="font-inter font-normal text-base text-light-gray">
          {anotherTitle}
        </p>
      </div>
    </div>
  );
};

export default LocationBox;
