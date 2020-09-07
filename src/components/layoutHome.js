import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../helpers/focus-visible.js'
import '../stylesheets/global.scss' // import global styles
import { Meta, Menu, Footer } from './'

const LayoutHome = ({ pageName, style, children }) => {
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
      <Menu isSquished={!isTop} isTransparent={true} />
      <div className={`page ${style}`}>
        <main className="main" id="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

LayoutHome.defaultProps = {
  pageName: 'Pamela Rae Schuller',
  style: '',
}

LayoutHome.propTypes = {
  pageName: PropTypes.string,
  style: PropTypes.string,
}

export default LayoutHome
