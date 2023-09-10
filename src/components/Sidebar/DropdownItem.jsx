import React from "react";

const DropdownItem = ({ dropdownItems }) => {
  return dropdownItems?.map((dropdownItem, idx) => (
    <li key={idx}>
      <a
        class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
        href="/"
      >
        {dropdownItem.name}
      </a>
    </li>
  ));
};

export default DropdownItem;
