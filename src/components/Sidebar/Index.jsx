import React, { useContext } from "react";
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
import { MainContext } from "../../context/MainContext";
import Logo from "../Logo/Index";

const Sidebar = () => {
  const { sidebar, toggleSidebar } = useContext(MainContext);

  return (
    <aside
      className={`${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/">
          <div className="flex items-center justify-center text-white">
            <Logo />
            <div className="text-3xl">AdminX</div>
          </div>
        </Link>

        <button
          class="block lg:hidden"
          onClick={toggleSidebar}
          // @click.stop="sidebarToggle = !sidebarToggle"
        >
          <svg
            class="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
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
