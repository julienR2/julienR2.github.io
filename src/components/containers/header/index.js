import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './styles.scss';

export default class Header extends Component {
  static propTypes = {
    scrolled: PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    const { scrolled } = this.props;

    return (
      <div>
        <Navbar expand="md" fixed="top" className={scrolled ? 'scrolled' : ''}>
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#services">
                    What I Do
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">
                    About Me
                  </NavLink>
                </NavItem>
                <NavItem className="logo">
                  <NavLink href="#home">
                    <h1>
                      J
                      <span>
                        R
                      </span>
                    </h1>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portfolio">
                    My Works
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
