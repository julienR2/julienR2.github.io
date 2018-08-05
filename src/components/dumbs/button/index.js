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
    light: PropTypes.bool,
  }

  render() {
    const {
      children, href, target, className, light,
    } = this.props;

    return (
      <div className={`${styles.button} ${className || ''} ${light ? styles.light : ''}`}>
        <a href={href} target={target}>
          {children}
        </a>
      </div>
    );
  }
}
