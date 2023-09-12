import { createContext, useState } from "react";
import React from "react";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [headerDropdown, setHeaderDropdown] = useState({
    notification: false,
    chat: false,
    user: false,
  });

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleHeaderDropdown = (dropdown) => {
    setHeaderDropdown((prevState) => {
      const newState = { ...prevState };
      for (const key in newState) {
        key !== dropdown && (newState[key] = false);
      }
      newState[dropdown] = !newState[dropdown];
      return newState;
    });
  };

  return (
    <MainContext.Provider
      value={{
        darkMode,
        toggleMode,
        sidebar,
        toggleSidebar,
        headerDropdown,
        toggleHeaderDropdown,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
