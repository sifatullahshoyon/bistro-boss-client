import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="py-20 px-5">
      <div className="chefService bg-fixed">
        <div className="flex flex-col justify-center items-center h-full text-center shadow-md">
          <div className="bg-white p-5 md:p-10 lg:p-20 overflow-auto">
            <h3 className="font-cinzel text-4xl text-black pb-3">
              Bistro Boss
            </h3>
            <p className="font-inter text-base mx-auto tracking-wide text-solid">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum <br /> deserunt ratione
              dolor officiis praesentium! Deserunt magni aperiam dolor eius
              dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
