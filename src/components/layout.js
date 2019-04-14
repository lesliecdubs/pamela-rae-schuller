import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon16 from '../assets/images/favicons/favicon-16x16.png'
import favicon32 from '../assets/images/favicons/favicon-32x32.png'
import favicon96 from '../assets/images/favicons/favicon-96x96.png'
import favicon128 from '../assets/images/favicons/favicon-128.png'
import favicon196 from '../assets/images/favicons/favicon-196x196.png'
import appleFavicon57 from '../assets/images/favicons/apple-touch-icon-57x57.png'
import appleFavicon60 from '../assets/images/favicons/apple-touch-icon-60x60.png'
import appleFavicon72 from '../assets/images/favicons/apple-touch-icon-72x72.png'
import appleFavicon76 from '../assets/images/favicons/apple-touch-icon-76x76.png'
import appleFavicon114 from '../assets/images/favicons/apple-touch-icon-114x114.png'
import appleFavicon120 from '../assets/images/favicons/apple-touch-icon-120x120.png'
import appleFavicon144 from '../assets/images/favicons/apple-touch-icon-144x144.png'
import appleFavicon152 from '../assets/images/favicons/apple-touch-icon-152x152.png'
import { useSiteMetadata } from '../hooks/site-metadata'
import '../helpers/focus-visible.js'

import '../stylesheets/global.scss' // import global styles

import Menu from './menu'
import Footer from './footer'

const Layout = ({ lang, children, style }) => {
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
          {
            name: 'description',
            content:
              'Comedian Pamela Rae Schuller is relentlessly funny. Her observations on disability, mental illness, dating, family, and past misadventures have led to brutally honest confessions about what it’s like being 4 foot 6 (and a half) and having a whole lot of Tourette Syndrome.',
          },
        ]}
        link={[
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '57x57',
            href: `${appleFavicon57}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '60x60',
            href: `${appleFavicon60}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '72x72',
            href: `${appleFavicon72}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '76x76',
            href: `${appleFavicon76}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '114x114',
            href: `${appleFavicon114}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '120x120',
            href: `${appleFavicon120}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '144x144',
            href: `${appleFavicon144}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '152x152',
            href: `${appleFavicon152}`,
          },
          {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            sizes: '57x57',
            href: `${appleFavicon57}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${favicon32}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            href: `${favicon96}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '128',
            href: `${favicon128}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '196x196',
            href: `${favicon196}`,
          },
        ]}
      />
      <Menu isSquished={!isTop} />
      <div className={`page ${style}`}>
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps = {
  lang: `en`,
  style: '',
}

Layout.propTypes = {
  lang: PropTypes.string.isRequired,
  style: PropTypes.string,
}

export default Layout
