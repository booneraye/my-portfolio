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
<<<<<<< HEAD
      <Link
        href={`${props.value}`}
        style={{
          color:
            props.value === current
              ? "rgba(255,255,255,.7)"
              : "rgba(255,255,255,.5)",
          fontWeight: props.value === current ? "500" : "normal",
        }}
        onClick={() =>
          setCurrent(props.value) ||
          window.localStorage.setItem("current", props.value)
        }
      >
        {props.label}
      </Link>
    );
  };

  const MENU = [
    { value: "/#home", label: "Home" },
    { value: "/#skills", label: "Skills" },
    { value: "/my-projects", label: "My Projects" },
    { value: "/#carreer-history", label: "Carreer History" },
  ];

=======
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

>>>>>>> 91b49b30341b4d41ac9db2abd3d4b611701685fb
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
