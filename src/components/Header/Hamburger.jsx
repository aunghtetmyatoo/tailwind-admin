import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const Hamburger = () => {
  const { sidebar, toggleSidebar } = useContext(MainContext);
  return (
    <button
      className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
      onClick={toggleSidebar}
    >
      <span className="relative block h-5.5 w-5.5 cursor-pointer">
        <span className="du-block absolute right-0 h-full w-full">
          <span
            className={`${
              !sidebar && "!w-full delay-300"
            } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white`}
          ></span>
          <span
            className={`${
              !sidebar && "!w-full delay-400"
            } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white`}
          ></span>
          <span
            className={`${
              !sidebar && "!w-full delay-500"
            } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white`}
          ></span>
        </span>
        <span className="du-block absolute right-0 h-full w-full rotate-45">
          <span
            className={`${
              !sidebar && "!h-0 delay-[0]"
            } absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white`}
          ></span>
          <span
            className={`${
              !sidebar && "!h-0 delay-200"
            } delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white`}
          ></span>
        </span>
      </span>
    </button>
  );
};

export default Hamburger;
