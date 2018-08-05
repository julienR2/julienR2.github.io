import React from 'react';

import Section from '../section';
import Button from '../button';

import styles from './styles.module.scss';

const Featured = () => (
  <div>
    <Section
      title="Featured Project"
      subtitle="Have a look at this Social Network for Travelers<br />It is a concrete project we are running <a href='https://www.behance.net/Shandraich' target='_blank' rel='noopener noreferrer'>Shandra</a>, <a href='https://github.com/XavC38' target='_blank' rel='noopener noreferrer'>Xavier</a> and I, with our passion for travelling"
      style={styles.section}
    >
      <div className={styles.imageWrapper}>
        <img src="images/chrome.png" alt="chrome" />
        <img src="images/nowmad.jpg" alt="nowmad" />
        <Button className={styles.button} href="https://nowmad.io" target="_blank">
          Visit Website
        </Button>
      </div>
    </Section>
  </div>
);

export default Featured;
