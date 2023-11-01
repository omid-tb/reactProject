import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
   
    <div>
      <Navbar {...args}>
        <NavbarBrand >reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Layout/Contacts/">لیست کاربران</NavLink>
            </NavItem>
            <NavItem>
            <NavItem>
              <NavLink href="/Layout/AddPost/"> افزودن پست</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Layout/Profile/">پروفایل</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">خروج</NavLink>
            </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Example;