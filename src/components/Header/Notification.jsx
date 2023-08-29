import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li class="relative">
      <a
        class="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        onClick={toggleDropdown}
      >
        <span class="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>

        <IoMdNotificationsOutline className="fill-current duration-300 ease-in-out text-xl text-bodydark2" />
      </a>

      {isOpen && (
        <div class="absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80">
          <div class="px-4.5 py-3">
            <h5 class="text-sm font-medium text-bodydark2">Notification</h5>
          </div>

          <ul class="flex h-auto flex-col overflow-y-auto">
            <li>
              <a
                class="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="#"
              >
                <p class="text-sm">
                  <span class="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>

                <p class="text-xs">12 May, 2025</p>
              </a>
            </li>
            <li>
              <a
                class="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="#"
              >
                <p class="text-sm">
                  <span class="text-black dark:text-white">
                    It is a long established fact
                  </span>
                  that a reader will be distracted by the readable.
                </p>

                <p class="text-xs">24 Feb, 2025</p>
              </a>
            </li>
            <li>
              <a
                class="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="#"
              >
                <p class="text-sm">
                  <span class="text-black dark:text-white">
                    There are many variations
                  </span>
                  of passages of Lorem Ipsum available, but the majority have
                  suffered
                </p>

                <p class="text-xs">04 Jan, 2025</p>
              </a>
            </li>
            <li>
              <a
                class="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="#"
              >
                <p class="text-sm">
                  <span class="text-black dark:text-white">
                    There are many variations
                  </span>
                  of passages of Lorem Ipsum available, but the majority have
                  suffered
                </p>

                <p class="text-xs">01 Dec, 2024</p>
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default Notification;
