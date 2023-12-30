import React, { useState } from "react";

import { useContext, createContext } from "react";

const SettingsContext= createContext();

export const SettingsProvider = ({ children }) => {
  const [color, setColor] = useState("bg-blue-300");
  console.log(color,"color")
  
  return (
    <SettingsContext.Provider value={{ color, setColor}}>
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettingsContext() {
  return useContext(SettingsContext);
}
