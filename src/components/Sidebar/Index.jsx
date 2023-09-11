import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import Group from "./Group";
import {
  RxDashboard,
  RxCalendar,
  RxAvatar,
  RxIdCard,
  RxTable,
  RxPieChart,
  RxGear,
  RxMix,
  RxPinRight,
} from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
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
                dropdownItems: [{ name: "eCommerce", route: "/" }],
              },
              {
                name: "Calendar",
                icon: (
                  <RxCalendar
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
                route: "/calendar",
              },
              {
                name: "Profile",
                icon: (
                  <RxAvatar
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
                route: "/profile",
              },
              {
                name: "Forms",
                icon: (
                  <RxIdCard
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: true,
                dropdownItems: [
                  { name: "Form Elements", route: "/form-elements" },
                  { name: "Form Layout", route: "/form-layout" },
                ],
              },
              {
                name: "Tables",
                icon: (
                  <RxTable
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
                route: "/tables",
              },
              {
                name: "Settings",
                icon: (
                  <RxGear
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
                route: "/settings",
              },
            ]}
          />
          <Group
            name="Others"
            groupItems={[
              {
                name: "Chart",
                icon: (
                  <RxPieChart
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: false,
                route: "/chart",
              },
              {
                name: "UI Elements",
                icon: (
                  <RxMix
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: true,
                dropdownItems: [
                  { name: "Alerts", route: "/alerts" },
                  { name: "Buttons", route: "/buttons" },
                ],
              },
              {
                name: "Authentication",
                icon: (
                  <RxPinRight
                    class="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  />
                ),
                isDropdown: true,
                dropdownItems: [
                  { name: "Sign In", route: "/signin" },
                  { name: "Sign Up", route: "/signup" },
                ],
              },
            ]}
          />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
