import React from "react";
import GroupItem from "./GroupItem";

const SidebarGroup = ({ name, groupItems }) => {
  return (
    <div>
      <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{name}</h3>

      <ul class="mb-6 flex flex-col gap-1.5">
        <GroupItem groupItems={groupItems} />
      </ul>
    </div>
  );
};

export default SidebarGroup;
