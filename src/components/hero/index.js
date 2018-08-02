import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col,
} from 'reactstrap';
import Slider from 'react-slick';

import './styles.scss';

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideSettings: {
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    };
  }

  render() {
    const { slideSettings } = this.state;

    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col sm="6" className="text-col">
                <h1 className="in">
                  Hi, I am Julien
                </h1>
                <p className="in">
                  a visual and interaction developer
                </p>
              </Col>
              <Col sm="6">
                <div className="imac-frame in">
                  <img className="img-fluid img-center" src="images/imac.png" alt="imac" />
                  <Slider {...slideSettings}>
                    <div>
                      <img src="images/slide_4.jpg" alt="slide4" />
                    </div>
                    <div>
                      <img src="images/slide_2.jpg" alt="slide2" />
                    </div>
                    <div>
                      <img src="images/slide_3.jpg" alt="slide3" />
                    </div>
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
