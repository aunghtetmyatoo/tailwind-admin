import React from "react";
import { FiSearch } from "react-icons/fi";
import Notification from "./Notification";
import Chat from "./Chat";
import UserArea from "./UserArea";

function Header() {
  return (
    <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div class="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div class="relative">
              <button class="absolute top-1/2 left-0 -translate-y-1/2">
                <FiSearch className="text-bodydark2 text-2xl" />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                class="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <Notification />
          <Chat />
          <UserArea />
        </ul>
      </div>
    </header>
  );
}

export default Header;
