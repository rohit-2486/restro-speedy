import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-around p-5">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-72 h-72 bg-gray-200 shadow-md rounded-lg animate-pulse m-4"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
