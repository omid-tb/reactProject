import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '/Layout/Contacts/', text: 'لیست کاربران' },
  { href: '/Layout/AddPost/', text: 'افزودن پست' },
  { href: '/Layout/Profile/', text: 'پروفایل' },
  { href: '/', text: 'خروج' },

];

const createNavItem = ({ href, text, className }) => (
  <NavItem >
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
    
      <div>
        <Navbar fixed='top' color="primary" light expand="md" dir='rtl'>
          <NavbarBrand >{JSON.parse(localStorage.getItem("userData"))?.username} خوش آمدید</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}