import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks/site-metadata'
import '../helpers/focus-visible.js'

import '../stylesheets/global.scss' // import global styles

import Menu from './menu'
import Footer from './footer'

const Layout = ({ lang, children }) => {
  const { title } = useSiteMetadata()
  const [isTop, setIsTop] = useState(true)

  useEffect(
    () => {
      window.addEventListener('scroll', () => {
        const checkTop = window.scrollY < 20
        if (checkTop !== isTop) {
          setIsTop(checkTop)
        }
      })
    },
    [isTop]
  )

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Menu isSquished={!isTop} />
      <div className="page">
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps = {
  lang: `en`,
}

Layout.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default Layout
