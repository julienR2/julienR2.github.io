import React, { PureComponent } from 'react';
import {
  Jumbotron, Container, Row, Col,
} from 'reactstrap';
import Slider from 'react-slick';

import styles from './styles.module.scss';

export default class Hero extends PureComponent {
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
        <Jumbotron id="home" className={styles.jumbotron}>
          <Container>
            <Row>
              <Col sm="6" className={styles.textCol}>
                <h1>
                  Hi, I am Julien
                </h1>
                <p>
                  a visual and interaction developer
                </p>
              </Col>
              <Col sm="6">
                <div className={styles.imacFrame}>
                  <img className="img-fluid img-center" src="images/imac.png" alt="imac" />
                  <Slider {...slideSettings} className={styles.slickSlider}>
                    <div>
                      <img src="images/slides/slide_4.jpg" alt="slide4" />
                    </div>
                    <div>
                      <img src="images/slides/slide_2.jpg" alt="slide2" />
                    </div>
                    <div>
                      <img src="images/slides/slide_3.jpg" alt="slide3" />
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
