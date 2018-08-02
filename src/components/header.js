import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar expand="md" fixed="top">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#services">What I Do</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About Me</NavLink>
                </NavItem>
                <NavItem className="logo">
                  <NavLink href="#home">
                    <h1>
                      J<span>R</span>
                    </h1>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portfolio">My Works</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact Me</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
