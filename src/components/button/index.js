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
    style: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
  }

  render() {
    const {
      children, href, target, style,
    } = this.props;

    return (
      <div className={`${styles.button} ${style || ''}`}>
        <a href={href} target={target}>
          {children}
        </a>
      </div>
    );
  }
}
