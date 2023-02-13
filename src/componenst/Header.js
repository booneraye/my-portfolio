import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink as Link,
  Collapse,
} from "shards-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");

  const NavLink = (props) => {
    return (
      <Link
        href={`#${props.value}`}
        style={{
          color: props.value === current ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.5)",
          fontWeight: props.value === current ? "500" : "normal",
        }}
        onClick={() => setCurrent(props.value)}
      >
        {props.label}
      </Link>
    );
  };

  const MENU = [
    { value: "home", label: "Home" },
    { value: "skills", label: "Skills" },
    { value: "my-projects", label: "My Projects" },
    { value: "carreer-history", label: "Carreer History" },
  ];

  return (
    <Navbar expand="md" style={{ backgroundColor: "#158892", color: "#fff" }}>
      <NavbarToggler onClick={() => setOpen(!open)} />

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
