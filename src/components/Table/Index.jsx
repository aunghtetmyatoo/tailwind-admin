import React from "react";
import Brand1Image from "../../assets/images/brand/brand-01.svg";
import Brand2Image from "../../assets/images/brand/brand-02.svg";
import Brand3Image from "../../assets/images/brand/brand-03.svg";
import Brand4Image from "../../assets/images/brand/brand-04.svg";
import Brand5Image from "../../assets/images/brand/brand-05.svg";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 class="mb-6 text-xl font-bold text-black dark:text-white">
        Top Channels
      </h4>

      <div class="flex flex-col">
        <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div class="p-2.5 xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Sales</h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        <TableRow
          img={Brand1Image}
          source="Google"
          visitor="3.5K"
          revenue="$5,768"
          sale="590"
          conversion="4.8%"
        />

        <TableRow
          img={Brand2Image}
          source="Twitter"
          visitor="2.2K"
          revenue="$4,635"
          sale="467"
          conversion="4.3%"
        />
        <TableRow
          img={Brand3Image}
          source="Github"
          visitor="2.2K"
          revenue="$4,635"
          sale="467"
          conversion="3.7%"
        />
        <TableRow
          img={Brand4Image}
          source="Vimeo"
          visitor="2.2K"
          revenue="$4,635"
          sale="467"
          conversion="3.3%"
        />
        <TableRow
          img={Brand5Image}
          source="Facebook"
          visitor="5.2K"
          revenue="$7,436"
          sale="467"
          conversion="4.3%"
        />
      </div>
    </div>
  );
};

export default Table;
