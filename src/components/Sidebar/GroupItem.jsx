import React, { useState } from "react";
import GroupItemLink from "./GroupItemLink";
import GroupItemDropdown from "./GroupItemDropdown";

const GroupItem = ({ groupItems }) => {
  const [isOpen, setIsOpen] = useState(
    groupItems.map(() => {
      return false;
    })
  );

  const toggleDropdown = (key) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[key] = !newState[key];
      return newState;
    });
  };

  return groupItems.map((groupItem, idx) =>
    groupItem.isDropdown ? (
      <GroupItemDropdown
        idx={idx}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        groupItem={groupItem}
      />
    ) : (
      <GroupItemLink idx={idx} groupItem={groupItem} />
    )
  );
};

export default GroupItem;
