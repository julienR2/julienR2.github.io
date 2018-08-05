import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";

import Header from '../components/containers/header';
import Hero from '../components/containers/hero';
import Services from '../components/containers/services';
import Featured from '../components/containers/featured';
import About from '../components/containers/about';

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: window.scrollY,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    const { scroll } = this.state;

    return (
      <div>
        <Header scrolled={scroll !== 0} />
        <Hero />
        <Services />
        <Featured />
        <About />
      </div>
    );
  }
}
