import React from "react";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="flex bg-[#3C50E0] rounded-lg shadow-xl mr-2 p-1 text-white">
      <BiLogoReact className="text-3xl" />
      <BiLogoTailwindCss className="text-3xl" />
    </div>
  );
};

export default Logo;
