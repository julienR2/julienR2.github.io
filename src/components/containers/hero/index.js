import React, { PureComponent } from 'react';
import {
  Jumbotron, Container, Row, Col,
} from 'reactstrap';
import Slider from 'react-slick';

import styles from './styles.module.scss';
import nowmad from '../../../../static/images/projects/nowmad/slide.jpg';
import renkan from '../../../../static/images/projects/renkan/main.jpg';
import nouma from '../../../../static/images/projects/nouma/slide.jpg';

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
                      <img src={nowmad} alt="nowmad" />
                    </div>
                    <div>
                      <img src={nouma} alt="nouma" />
                    </div>
                    <div>
                      <img src={renkan} alt="renkan" />
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
