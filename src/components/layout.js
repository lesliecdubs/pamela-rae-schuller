import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { useSiteMetadata } from "../hooks/site-metadata"
import '../helpers/focus-visible.js'

import '../stylesheets/global.scss' // import global styles

import triangleTextureVideo from '../assets/videos/triangles.mp4'

import Menu from './menu'
import Footer from './footer'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Menu />
      <div className="page-fit">
        {/* <div className="page-fit__video">
          <video muted loop autoPlay playsInline>
            <source src={triangleTextureVideo} type="video/mp4" />
          </video>
        </div> */}
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
