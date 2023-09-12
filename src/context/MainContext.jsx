import { createContext, useState } from "react";
import React from "react";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <MainContext.Provider
      value={{
        darkMode,
        toggleMode,
        sidebar,
        toggleSidebar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
