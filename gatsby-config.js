let activeEnv = process.env.ACTIVE_ENV
if (!activeEnv) {
  activeEnv = 'staging'
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'Pamela Rae Schuller',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-remove-trailing-slashes', 
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets\/images\/inline-svgs/,
      },
    },
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '3978653',
        respectDNT: true, // optional
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138326947-1',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
