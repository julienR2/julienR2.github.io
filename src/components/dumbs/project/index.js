import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import Icon from '../icon';

import styles from './styles.module.scss';

export default class Project extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.any,
  }

  render() {
    const {
      onClick,
      data: {
        title, images, stack, link,
      },
    } = this.props;

    return (
      <Col
        xs="12"
        sm="6"
        lg="4"
        className={styles.project}
        onClick={onClick}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={styles.wrapper}>
            <img src={images.main} alt={title} />
            <div className={styles.info}>
              <h2 className={styles.title}>
                {title}
              </h2>
              <p>
                {stack.join(' - ')}
              </p>
              <Icon icon="arrow-right" className={styles.icon} />
            </div>
          </div>
        </a>
      </Col>
    );
  }
}
