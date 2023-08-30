import { createContext, useState } from "react";
import React from "react";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MainContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
