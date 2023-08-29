import React from "react";

const ChatCardRow = ({ img, title, text, ago, badge }) => {
  return (
    <a
      href="messages.html"
      class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
    >
      <div class="relative h-14 w-14 rounded-full">
        <img src={img} alt="User" />
        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
      </div>

      <div class="flex flex-1 items-center justify-between">
        <div>
          <h5 class="font-medium text-black dark:text-white">{title}</h5>
          <p>
            <span class="text-sm font-medium text-black dark:text-white">
              {text}
            </span>
            <span class="text-xs">{ago}</span>
          </p>
        </div>
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
          <span class="text-sm font-medium text-white">3</span>
        </div>
      </div>
    </a>
  );
};

export default ChatCardRow;
