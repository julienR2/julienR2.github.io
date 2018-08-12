import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './fonts.scss';
import './index.scss';

library.add(fab, fas);

export default class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          title="Julien's Portfolio"
          meta={[
            { name: 'description', content: 'Portfolio of Julien Rougeron, frontend developer' },
            { name: 'keywords', content: 'julien,rougeron,julien rougeron,portfolio,frontend,developer' },
          ]}
        >
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
        </Helmet>
        { children() }
      </div>
    );
  }
}
