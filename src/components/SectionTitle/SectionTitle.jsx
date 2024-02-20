import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-5 w-4/12 mx-auto">
      <p className="text-dark-yellow italic text-xl font-inter pb-2">
        --- {subHeading} ---
      </p>
      <h3 className="text-solid text-4xl border-y-2 p-2 mb-5 font-medium font-inter">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
