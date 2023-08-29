import React from "react";

const TableRow = ({ img, source, visitor, revenue, sale, conversion }) => {
  return (
    <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
      <div class="flex items-center gap-3 p-2.5 xl:p-5">
        <div class="flex-shrink-0">
          <img src={img} alt="Brand" />
        </div>
        <p class="hidden font-medium text-black dark:text-white sm:block">
          {source}
        </p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium text-black dark:text-white">{visitor}</p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium text-meta-3">{revenue}</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p class="font-medium text-black dark:text-white">{sale}</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p class="font-medium text-meta-5">{conversion}</p>
      </div>
    </div>
  );
};

export default TableRow;
