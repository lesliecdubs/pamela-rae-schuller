import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../helpers/focus-visible.js'
import '../stylesheets/global.scss' // import global styles
import { Meta, Menu, Footer } from './'

const Layout = ({ pageName, style, children }) => {
  const [isTop, setIsTop] = useState(true)

  const listener = () => {
    const checkTop = window.scrollY < 3
    if (checkTop !== isTop) {
      setIsTop(checkTop)
    }
  }

  useEffect(
    () => {
      window.addEventListener('scroll', listener)
      return () => {
        window.removeEventListener('scroll', listener)
      }
    },
    [isTop]
  )

  return (
    <>
      <Meta lang="en" pageName={pageName} />
      <Menu isSquished={!isTop} />
      <div className={`page ${style}`}>
        <main className="main" id="main">
          <div className="paint is-visible-md" />
          <div className="page-section contain">
            <h1 className="page-section__title">{pageName}</h1>
            <div className="page-section__wrap">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps = {
  pageName: 'Pamela Rae Schuller',
  style: '',
}

Layout.propTypes = {
  pageName: PropTypes.string,
  style: PropTypes.string,
}

export default Layout
