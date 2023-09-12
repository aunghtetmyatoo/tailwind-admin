import React from "react";
import { FiSearch } from "react-icons/fi";
import Notification from "./Notification";
import Chat from "./Chat";
import UserArea from "./UserArea";
import DarkMode from "../DarkMode/Index";
import Hamburger from "./Hamburger";
import Logo from "../Logo/Index";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Hamburger />
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <FiSearch classNameName="text-bodydark2 text-2xl" />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center gap-3 2xsm:gap-7">
        <ul className="flex items-center gap-2 2xsm:gap-4">
          <DarkMode />
          <Notification />
          <Chat />
          <UserArea />
        </ul>
      </div>
    </header>
  );
}

export default Header;
