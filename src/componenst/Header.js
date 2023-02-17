import React, { useState } from "react";
import { Link, useNavigate } from "@reach/router";
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";
import { useAppData } from "../context/AppContext";

const Header = () => {
  const { smoothScroll, current, setCurrent, MENU } = useAppData();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropDown] = useState("");

  const navigate = useNavigate();

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
          {MENU.filter((menu) => menu.type === "link").map((menu, index) => (
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

          {MENU.filter((menu) => menu.type === "dropdown").map(
            (menu, index) => (
              <Dropdown
                open={openDropdown === menu.value}
                toggle={() =>
                  setOpenDropDown(openDropdown === menu.value ? "" : menu.value)
                }
              >
                <DropdownToggle nav caret>
                  {menu.label}
                </DropdownToggle>
                <DropdownMenu>
                  {menu.list.map((l) => (
                    <DropdownItem onClick={() => navigate(l.value)}>
                      {l.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
