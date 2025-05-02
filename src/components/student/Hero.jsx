import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-purple-100/70">
      <h1 className="md:text-[48px] md:leading-[60px] text-[30px] leading-[36px] text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        Join a like-minded community and start your growth {""}
        <span className="text-purple-800">
          journey today!
          <img
            src={assets.sktech}
            alt="sketch"
            className="md:block hidden absolute -bottom-7 right-0"
          />
        </span>
      </h1>
      <p className="md:block hidden text-gray-700 max-w-2xl mx-auto">
        Our unique approach to education blends creativity with practical
        skills, offering a wide range of courses that cater to all interests.{" "}
      </p>
      <p className="md:hidden text-gray-700 max-w-sm mx-auto">
        Our unique approach to education blends creativity with practical
        skills, offering a wide range of courses that cater to all interests.{" "}
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
