import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function useAppData() {
  return useContext(Context);
}

export const AppContext = ({ children }) => {
  const [current, setCurrent] = useState(
    window.localStorage.getItem("current") || "home"
  );

  useEffect(() => {
    const element = document.getElementById(current);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [current]);

  return (
    <Context.Provider value={{ current, setCurrent }}>
      {children}
    </Context.Provider>
  );
};
