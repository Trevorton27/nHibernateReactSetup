import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class AppHeader extends Component {
  state = {
    isOpen: false
  };
  toggle = this.toggle.bind(this);

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>
          <h3 width='128' className='d-inline-block align-top'>
            {' '}
            SDMM
          </h3>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
      </Navbar>
    );
  }
}

export default AppHeader;
