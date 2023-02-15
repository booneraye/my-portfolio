import React, { createContext, useContext, useState, useEffect } from "react";
import useMediaQuery from "use-mediaquery";
import { REACT_JS_PROJECTS } from "../projects/react-js-projects";

const Context = createContext();

export function useAppData() {
  return useContext(Context);
}

export const AppContext = ({ children }) => {
  const screenWidth = useMediaQuery("(max-width: 800px)");
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
    <Context.Provider
      value={{ current, setCurrent, screenWidth, REACT_JS_PROJECTS }}
    >
      {children}
    </Context.Provider>
  );
};
