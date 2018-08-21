import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './styles.scss';

export default class Header extends PureComponent {
  static propTypes = {
    scrolled: PropTypes.bool,
  }

  render() {
    const { scrolled } = this.props;

    return (
      <div>
        <Navbar expand="md" fixed="top" className={scrolled ? 'scrolled' : ''}>
          <Container>
            <Nav navbar>
              <NavItem>
                <NavLink href="#services">
                  What I Do
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#featured">
                  Featured
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
                <NavLink href="#about-me">
                  About Me
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
