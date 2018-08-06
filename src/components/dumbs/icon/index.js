import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Icon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const { className, icon } = this.props;

    return <FontAwesomeIcon className={className} icon={icon} />;
  }
}
