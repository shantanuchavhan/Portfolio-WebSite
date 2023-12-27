import React, { useState } from "react";

import { useContext, createContext } from "react";

const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen, setIsOpen, "isOpen, setIsOpen");
  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export function useSideBarContext() {
  return useContext(SideBarContext);
}
