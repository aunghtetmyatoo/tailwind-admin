import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import Group from "./Group";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav
          class="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
          x-data="{selected: $persist('Dashboard')}"
        >
          <Group
            name="Menu"
            groupItems={[
              {
                name: "Dashboard",
                icon: (
                  <RxDashboard
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: true,
                dropdownItems: [{ name: "eCommerce" }],
              },
              {
                name: "Dashboards",
                icon: (
                  <RxDashboard
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
              },
            ]}
          />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
