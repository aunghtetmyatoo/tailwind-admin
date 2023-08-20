import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "../assets/images/logo/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <a href="index.html">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav
          class="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
          x-data="{selected: $persist('Dashboard')}"
        >
          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

            <ul class="mb-6 flex flex-col gap-1.5">
              <li>
                <a
                  class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                  onClick={toggleDropdown}
                >
                  <RxDashboard
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                  Dashboard
                  {isOpen ? (
                    <FiChevronUp
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    />
                  ) : (
                    <FiChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    />
                  )}
                </a>

                {isOpen && (
                  <div class="overflow-hidden">
                    <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                      <li>
                        <a
                          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                          href="#"
                        >
                          eCommerce
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
