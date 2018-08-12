/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'reactstrap';

import Section from '../../dumbs/section';
import Button from '../../dumbs/button';

import styles from './styles.module.scss';

const About = () => (
  <div>
    <Section
      id="about-me"
      title="About Me"
      className={styles.section}
    >
      <Row>
        <Col sm={{ size: 8, offset: 2 }} className={styles.item}>
          <img className="img-fluid img-center img-circle" src="images/about.jpg" alt="Me" />
          <p>
            I am Julien Rougeron, a 25 years old Frontend Engineer from France. Graduated from the "Université de Technologie de Compiègne", I have a passion for working on developing interfaces using emerging technologies.
            <br /> Particularly interested in UX and UI, I position my personal projects in studying the ways to meet user needs and develop new interactions.
          </p>
          <div>
            <Button
              type="light"
              className={styles.button}
              prefixIcon={['fab', 'linkedin']}
              target="_blank"
              href="https://www.linkedin.com/in/julien-rougeron-60044a3b"
            />
            <Button
              type="light"
              className={styles.button}
              prefixIcon={['fab', 'facebook']}
              target="_blank"
              href="https://www.facebook.com/julien.rougeron.9"
            />
            <Button
              type="light"
              className={styles.button}
              prefixIcon={['fab', 'twitter']}
              target="_blank"
              href="https://twitter.com/julien_r2"
            />
            <Button
              type="light"
              className={styles.button}
              prefixIcon={['fab', 'github']}
              target="_blank"
              href="https://github.com/julienR2"
            />
            <Button
              type="light"
              className={styles.button}
              prefixIcon="envelope"
              href="mailto:julien.rougeron@gmail.com"
            />
          </div>
        </Col>
      </Row>
    </Section>
  </div>
);

export default About;
