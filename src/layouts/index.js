import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './fonts.scss';
import './index.scss';

export default class Layour extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      scroll: window.scrollY,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    const { scroll } = this.state;
    const { children, data } = this.props;

    return (
      <div>
        <Helmet
          title="Julien's Portfolio"
          meta={[
            { name: 'description', content: 'Portfolio of Julien Rougeron, frontend developer' },
            { name: 'keywords', content: 'julien,rougeron,julien rougeron,portfolio,frontend,developer' },
          ]}
        >
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
        </Helmet>

        <Header scrolled={scroll !== 0} />
        { children() }
      </div>
    );
  }
}
