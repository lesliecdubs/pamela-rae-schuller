import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import favicon16 from '../assets/images/favicons/favicon-16x16.png'
import favicon32 from '../assets/images/favicons/favicon-32x32.png'
import favicon96 from '../assets/images/favicons/favicon-96x96.png'
import favicon128 from '../assets/images/favicons/favicon-128.png'
import favicon196 from '../assets/images/favicons/favicon-196x196.png'
import faviconAppleTouch57 from '../assets/images/favicons/apple-touch-icon-57x57.png'
import faviconAppleTouch60 from '../assets/images/favicons/apple-touch-icon-60x60.png'
import faviconAppleTouch72 from '../assets/images/favicons/apple-touch-icon-72x72.png'
import faviconAppleTouch76 from '../assets/images/favicons/apple-touch-icon-76x76.png'
import faviconAppleTouch114 from '../assets/images/favicons/apple-touch-icon-114x114.png'
import faviconAppleTouch120 from '../assets/images/favicons/apple-touch-icon-120x120.png'
import faviconAppleTouch144 from '../assets/images/favicons/apple-touch-icon-144x144.png'
import faviconAppleTouch152 from '../assets/images/favicons/apple-touch-icon-152x152.png'
import faviconMSTile144 from '../assets/images/favicons/mstile-144x144.png'
import faviconMSTile70 from '../assets/images/favicons/mstile-70x70.png'
import faviconMSTile150 from '../assets/images/favicons/mstile-150x150.png'
import faviconMSTile310150 from '../assets/images/favicons/mstile-310x150.png'
import faviconMSTile310 from '../assets/images/favicons/mstile-310x310.png'
import ogImage from '../assets/images/og-image.jpg'

const defaultTitle = 'Pamela Rae Schuller'
const titleSuffix = ' | Pamela Rae Schuller'
const description =
  'Comedian Pamela Rae Schuller is relentlessly funny. Her observations on disability, mental illness, dating, family, and past misadventures have led to brutally honest confessions about what it’s like being 4 foot 6 (and a half) and having a whole lot of Tourette Syndrome.'

const Meta = ({ lang, pageName }) => {
  const title = concatTitle(pageName)
  const [location, setLocation] = useState('')
  const [pageTitle, setPageTitle] = useState(title)

  useEffect(
    () => {
      setLocation(window.location)
      setPageTitle(pageTitle)
    },
    [location, pageTitle]
  )

  function metaImageUrl(url) {
    return url.match(/http/) ? url : `${location.origin}${url}`
  }

  function concatTitle(title) {
    return title === defaultTitle ? defaultTitle : title + titleSuffix
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    >
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={faviconAppleTouch57}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={faviconAppleTouch114}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={faviconAppleTouch72}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={faviconAppleTouch144}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href={faviconAppleTouch60}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={faviconAppleTouch120}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href={faviconAppleTouch76}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={faviconAppleTouch152}
      />
      <link rel="icon" type="image/png" href={favicon196} sizes="196x196" />
      <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
      <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon128} sizes="128x128" />
      <meta name="application-name" content="NYC Pride 2019" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content={faviconMSTile144} />
      <meta name="msapplication-square70x70logo" content={faviconMSTile70} />
      <meta name="msapplication-square150x150logo" content={faviconMSTile150} />
      <meta
        name="msapplication-wide310x150logo"
        content={faviconMSTile310150}
      />
      <meta name="msapplication-square310x310logo" content={faviconMSTile310} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@pamelacomedy" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:image" content={metaImageUrl(ogImage)} />
      <meta property="fb:app_id" content={process.env.GATSBY_FACEBOOK_APP_ID} />
      <meta
        property="og:url"
        content={`${location.origin + location.pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImageUrl(ogImage)} />
    </Helmet>
  )
}

Meta.defaultProps = {
  lang: `en`,
}

Meta.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default Meta
