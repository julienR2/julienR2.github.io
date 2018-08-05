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
    onClick: PropTypes.func,
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
  }

  render() {
    const {
      children, onClick, href, target, className, type, active,
    } = this.props;
    const buttonProps = !href ? {
      onClick,
      onKeyPress: onClick,
      role: 'button',
      tabIndex: '0',
    } : {};

    return (
      <div
        className={`${styles.button} ${className || ''} ${type ? styles[type] : ''} ${active ? styles.active : ''}`}
        {...buttonProps}
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
