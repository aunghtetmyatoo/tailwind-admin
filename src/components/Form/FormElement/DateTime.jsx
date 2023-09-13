import React from "react";

const DateTime = () => {
  return (
    <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 class="font-medium text-black dark:text-white">Time and date</h3>
      </div>
      <div class="flex flex-col gap-5.5 p-6.5">
        <div>
          <label class="mb-3 block font-medium text-sm text-black dark:text-white">
            Date picker
          </label>
          <div class="relative">
            <input
              type="date"
              class="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label class="mb-3 block font-medium text-sm text-black dark:text-white">
            Select date
          </label>
          <div class="relative">
            <input
              type="date"
              class="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
