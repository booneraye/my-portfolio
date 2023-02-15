import React, { useState } from "react";
import { Link } from "@reach/router";
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "shards-react";
import { useAppData } from "../context/AppContext";

const Header = () => {
  const { smoothScroll, current, setCurrent, MENU } = useAppData();
  const [open, setOpen] = useState(false);

  const NavLink = ({ children, ...props }) => {
    return (
      <>
        <Link
          getProps={({ isCurrent }) => {
            return isCurrent
              ? { className: "active nav-link" }
              : { className: "nav-link" };
          }}
          {...props}
        >
          {children}
        </Link>
      </>
    );
  };

  return (
    <Navbar expand="md" type="dark">
      <NavbarToggler onClick={() => setOpen(!open)} />
      <NavbarBrand href="#home">💻 Portfolio 101</NavbarBrand>
      <Collapse open={open} navbar>
        <Nav navbar>
          {MENU.map((menu, index) => (
            <NavItem>
              <NavLink
                to={menu.value}
                onClick={() =>
                  smoothScroll(menu.value.replace("#", "").replace("/", "")) ||
                  window.localStorage.setItem(
                    "current",
                    menu.value.replace("#", "").replace("/", "")
                  )
                }
              >
                {menu.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
