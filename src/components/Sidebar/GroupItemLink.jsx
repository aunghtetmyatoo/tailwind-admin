import React from "react";
import { Link } from "react-router-dom";

const GroupItemLink = ({ idx, groupItem }) => {
  return (
    <li key={idx}>
      <Link to={groupItem.route}>
        <div class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 hover:cursor-pointer">
          {groupItem.icon}
          <span>{groupItem.name}</span>
        </div>
      </Link>
    </li>
  );
};

export default GroupItemLink;
