import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import DropdownItem from "./DropdownItem";

const GroupItem = ({ groupItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return groupItems.map((groupItem, idx) => (
    <li key={idx}>
      <div
        class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
        onClick={toggleDropdown}
      >
        {groupItem.icon}
        <span>{groupItem.name}</span>
        {groupItem.isDropdown &&
          (isOpen ? (
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
          ))}
      </div>
      {groupItem.isDropdown && isOpen && (
        <div class="overflow-hidden">
          <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
            <DropdownItem dropdownItems={groupItem.dropdownItems} />
          </ul>
        </div>
      )}
    </li>
  ));
};

export default GroupItem;
