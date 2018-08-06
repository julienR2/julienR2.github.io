import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import styles from './styles.module.scss';

export default class Project extends PureComponent {
  static propTypes = {
    data: PropTypes.any,
  }

  render() {
    const { data: { title, images, stack } } = this.props;

    return (
      <Col
        xs="12"
        sm="6"
        lg="4"
        key={title}
        className={styles.project}
      >
        <img src={images.main} alt={title} />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p>
            {stack.join(' - ')}
          </p>
        </div>
      </Col>
    );
  }
}
