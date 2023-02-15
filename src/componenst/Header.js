import React, { useState } from "react";
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink as Link,
  Collapse,
} from "shards-react";
import { useAppData } from "../context/AppContext";

const Header = () => {
  const { current, setCurrent } = useAppData();
  const [open, setOpen] = useState(false);

  const NavLink = (props) => {
    return (
      <Link
        href={`${props.value}`}
        style={{
          color:
            props.value.replace("/#") === current
              ? "rgba(255,255,255,.7)"
              : "rgba(255,255,255,.5)",
          fontWeight: props.value.replace("/#") === current ? "500" : "normal",
        }}
        onClick={() =>
          setCurrent(props.value) ||
          window.localStorage.setItem("current", props.value.replace("/#", ""))
        }
      >
        {props.label}
      </Link>
    );
  };

  const MENU = [
    { value: "/#home", label: "Home" },
    { value: "/#skills", label: "Skills" },
    { value: "/#carreer-history", label: "Carreer History" },
    { value: "/react-js-projects", label: "React Projects" },
  ];

  return (
    <Navbar expand="md" type="dark">
      <NavbarToggler onClick={() => setOpen(!open)} />
      <NavbarBrand href="#home">💻 Portfolio 101</NavbarBrand>
      <Collapse open={open} navbar>
        <Nav navbar>
          {MENU.map((menu, index) => (
            <NavItem>
              <NavLink value={menu.value} label={menu.label} />
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
