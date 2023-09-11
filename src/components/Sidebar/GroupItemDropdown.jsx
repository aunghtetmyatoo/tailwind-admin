import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import DropdownItem from "./DropdownItem";

const GroupItemDropdown = ({ groupItem, idx, isOpen, toggleDropdown }) => {
  return (
    <li key={idx}>
      <div
        class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 hover:cursor-pointer"
        onClick={() => toggleDropdown(idx)}
      >
        {groupItem.icon}
        <span>{groupItem.name}</span>
        {isOpen[idx] ? (
          <FiChevronUp
            className="absolute right-4 top-1/2 -translate-y-1/2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          />
        ) : (
          <FiChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          />
        )}
      </div>
      {isOpen[idx] && (
        <div class="overflow-hidden">
          <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
            <DropdownItem dropdownItems={groupItem.dropdownItems} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default GroupItemDropdown;
