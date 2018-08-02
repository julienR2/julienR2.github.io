import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './fonts.scss'
import './index.scss'

const Layout = ({ children, data }) => (
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

    <Header />
    { children() }
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
