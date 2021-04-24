import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../helpers/focus-visible.js'
import '../stylesheets/global.scss' // import global styles
import { Meta, Footer } from './'

const LayoutNoMenu = ({ pageName, style, children }) => {
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
      <div className={`page ${style}`}>
        <main className="main contain contain--centered-content" id="main">
          {children}
        </main>
        <Footer withSocial={false} />
      </div>
    </>
  )
}

LayoutNoMenu.defaultProps = {
  pageName: 'Pamela Rae Schuller',
  style: 'page--scroll page--no-menu',
}

LayoutNoMenu.propTypes = {
  pageName: PropTypes.string,
  style: PropTypes.string,
}

export default LayoutNoMenu
