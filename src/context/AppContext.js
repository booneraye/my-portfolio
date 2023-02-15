import React, { createContext, useContext, useState, useEffect } from "react";
import useMediaQuery from "use-mediaquery";
import { REACT_JS_PROJECTS } from "../projects/react-js-projects";
import { ARDUINO_PROJECTS } from "../projects/arduino-projects";
import { WORDPRESS_PROJECTS } from "../projects/wordpress-projects";

const Context = createContext();

export function useAppData() {
  return useContext(Context);
}

export const AppContext = ({ children }) => {
  const screenWidth = useMediaQuery("(max-width: 800px)");
  const [current, setCurrent] = useState(
    window.localStorage.getItem("current") || "home"
  );

  const MENU = [
    { value: "/#home", label: "Home" },
    { value: "/#skills", label: "Skills" },
    { value: "/#carreer-history", label: "Carreer History" },
    { value: "/react-js-projects", label: "React Projects" },
    { value: "/arduino-projects", label: "Arduino Projects" },
    { value: "/wordpress-projects", label: "WordPress Projects" },
  ];

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

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <Context.Provider
      value={{
        smoothScroll,
        current,
        setCurrent,
        screenWidth,
        MENU,
        REACT_JS_PROJECTS,
        ARDUINO_PROJECTS,
        WORDPRESS_PROJECTS,
      }}
    >
      {children}
    </Context.Provider>
  );
};
