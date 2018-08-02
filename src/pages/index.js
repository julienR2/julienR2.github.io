import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";

import './index.scss';

export default class IndexPage extends Component {
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
                <h1 className="in">Hi, I am Julien</h1>
                <p className="in">a visual and interaction developer</p>
              </Col>
              <Col sm="6">
                <div className="imac-frame in">
                  <img className="img-fluid img-center" src="images/imac.png" />
                  <Slider { ...slideSettings }>
                    <div>
                      <img src="images/slide_4.jpg" />
                    </div>
                    <div>
                      <img src="images/slide_2.jpg" />
                    </div>
                    <div>
                      <img src="images/slide_3.jpg" />
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
