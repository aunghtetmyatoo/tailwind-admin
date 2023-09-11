import React from "react";
import { Link } from "react-router-dom";

const GroupItemLink = ({ idx, groupItem }) => {
  return (
    <li key={idx}>
      <Link
        to="/"
        class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white hover:cursor-pointer"
      >
        {groupItem.icon}
        <span>{groupItem.name}</span>
      </Link>
    </li>
  );
};

export default GroupItemLink;
