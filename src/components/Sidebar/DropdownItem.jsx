import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({ dropdownItems }) => {
  return dropdownItems?.map((dropdownItem, idx) => (
    <li key={idx}>
      <Link
        to={dropdownItem.route}
        class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white hover:cursor-pointer"
      >
        {dropdownItem.name}
      </Link>
    </li>
  ));
};

export default DropdownItem;
