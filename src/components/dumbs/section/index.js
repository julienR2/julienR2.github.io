/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import styles from './styles.module.scss';

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array,
      PropTypes.string,
    ]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    const {
      title, subtitle, children, style,
    } = this.props;

    return (
      <div className={`${styles.section} ${style || ''}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <h1>
              { title }
            </h1>
            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
          </div>

          { children }
        </Container>
      </div>
    );
  }
}
