/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'reactstrap';

import Section from '../../dumbs/section';

import styles from './styles.module.scss';

const Services = () => (
  <div>
    <Section
      title="What I Do"
      subtitle="Social traveler and developer, I try to create more meaningful interfaces<br />with better user experience, to help people communicate and interact"
    >
      <Row>
        <Col md="3" sm="6" className={styles.item}>
          <div className={styles.icon}>
            <img className="img-fluid img-center" src="images/services/service1.png" alt="Web" />
          </div>
          <h2>
            Web Development
          </h2>
          <p>
            <b>VanillaJs, AngularJs, ReactJs</b>, etc. I use the <b>required</b> framework or technology to create a <b>maintainable</b> Web Application
          </p>
        </Col>
        <Col md="3" sm="6" className={styles.item}>
          <div className={styles.icon}>
            <img className="img-fluid img-center" src="images/services/service2.png" alt="Pixel" />
          </div>
          <h2>
            Pixel Perfect
          </h2>
          <p>
            I love to work <b>side by side with designers</b> to create meaning full interfaces and integrate <b>the best</b> their design
          </p>
        </Col>
        <Col md="3" sm="6" className={styles.item}>
          <div className={styles.icon}>
            <img className="img-fluid img-center" src="images/services/service3.png" alt="Team" />
          </div>
          <h2>
            Team Work
          </h2>
          <p>
            <b>Social developer</b>, I like to <b>interact</b>, <b>learn</b>, and <b>exchange</b> with the team and make sure there is a good working ambiance
          </p>
        </Col>
        <Col md="3" sm="6" className={styles.item}>
          <div className={styles.icon}>
            <img className="img-fluid img-center" src="images/services/service4.png" alt="language" />
          </div>
          <h2>
            Languages
          </h2>
          <p>
            I work in <b>French</b>, <b>English</b>, and <b>Spanish</b> so I'm use to interact in other languages with multicultural teams. <b>And I love it !</b>
          </p>
        </Col>
      </Row>
    </Section>
  </div>
);

export default Services;
