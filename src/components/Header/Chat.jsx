import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import User1Image from "../../assets/images/user/user-01.png";
import User2Image from "../../assets/images/user/user-02.png";
import User3Image from "../../assets/images/user/user-03.png";
import User4Image from "../../assets/images/user/user-04.png";
import User5Image from "../../assets/images/user/user-05.png";

function Chat() {
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
        <span class="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>

        <IoChatbubbleEllipsesOutline className="fill-current duration-300 ease-in-out text-xl text-bodydark2" />
      </a>

      {isOpen && (
        <div
          x-show="dropdownOpen"
          class="absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80"
        >
          <div class="px-4.5 py-3">
            <h5 class="text-sm font-medium text-bodydark2">Messages</h5>
          </div>

          <ul class="flex h-auto flex-col overflow-y-auto">
            <li>
              <a
                class="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="messages.html"
              >
                <div class="h-12.5 w-12.5 rounded-full">
                  <img src={User1Image} alt="User" />
                </div>

                <div>
                  <h6 class="text-sm font-medium text-black dark:text-white">
                    Mariya Desoja
                  </h6>
                  <p class="text-sm">I like your confidence 💪</p>
                  <p class="text-xs">2min ago</p>
                </div>
              </a>
            </li>
            <li>
              <a
                class="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="messages.html"
              >
                <div class="h-12.5 w-12.5 rounded-full">
                  <img src={User2Image} alt="User" />
                </div>

                <div>
                  <h6 class="text-sm font-medium text-black dark:text-white">
                    Robert Jhon
                  </h6>
                  <p class="text-sm">Can you share your offer?</p>
                  <p class="text-xs">10min ago</p>
                </div>
              </a>
            </li>
            <li>
              <a
                class="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="messages.html"
              >
                <div class="h-12.5 w-12.5 rounded-full">
                  <img src={User3Image} alt="User" />
                </div>

                <div>
                  <h6 class="text-sm font-medium text-black dark:text-white">
                    Henry Dholi
                  </h6>
                  <p class="text-sm">I cam across your profile and...</p>
                  <p class="text-xs">1day ago</p>
                </div>
              </a>
            </li>
            <li>
              <a
                class="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="messages.html"
              >
                <div class="h-12.5 w-12.5 rounded-full">
                  <img src={User4Image} alt="User" />
                </div>

                <div>
                  <h6 class="text-sm font-medium text-black dark:text-white">
                    Cody Fisher
                  </h6>
                  <p class="text-sm">I’m waiting for you response!</p>
                  <p class="text-xs">5days ago</p>
                </div>
              </a>
            </li>
            <li>
              <a
                class="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="messages.html"
              >
                <div class="h-12.5 w-12.5 rounded-full">
                  <img src={User5Image} alt="User" />
                </div>

                <div>
                  <h6 class="text-sm font-medium text-black dark:text-white">
                    Mariya Desoja
                  </h6>
                  <p class="text-sm">I like your confidence 💪</p>
                  <p class="text-xs">2min ago</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default Chat;
