import React from "react";
import { assets } from "../../assets/assets";

const Tools = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-600">Unlock your creativity with</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-13 md:mt-10 mt-5">
        <img src={assets.figma} alt="Figma" className="w-20 md:w-28" />
        <img src={assets.canva} alt="Canva" className="w-20 md:w-28" />
        <img src={assets.sketch} alt="Sketch" className="w-20 md:w-28" />
        <img src={assets.adobe} alt="Adobe" className="w-20 md:w-28" />
        <img src={assets.blender} alt="Blender" className="w-20 md:w-28" />
      </div>
    </div>
  );
};

export default Tools;
