import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
  }

  render() {
    const {
      children, href, target, className, type, active,
    } = this.props;

    return (
      <div
        className={`${styles.button} ${className || ''} ${type ? styles[type] : ''} ${active ? styles.active : ''}`}
      >
        {href ? (
          <a href={href} target={target} className={`${active ? styles.active : ''}`}>
            {children}
          </a>
        ) : (
          <div className={styles.a}>
            {children}
          </div>
        )}
      </div>
    );
  }
}
