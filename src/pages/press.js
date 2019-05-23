import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout, PressLogo, LinkBtn, PressGroup } from '../components'
import { normalizePressPage } from '../helpers'
import Img from 'gatsby-image'

class PressPage extends Component {
  constructor(props) {
    super(props)
    this._pressPage = normalizePressPage(
      props.data.allContentfulPressPage.edges[0].node
    )
  }

  render() {
    const {
      headline,
      hero,
      heroAlt,
      asSeenOn,
      byPam,
      aboutPam,
    } = this._pressPage

    return (
      <Layout style="page--scroll" pageName={headline}>
        <Img fluid={hero} alt={heroAlt} className="is-visible-sm" />

        <h2>As Seen On</h2>
        <ul className="press-logos">
          {asSeenOn.map((logo, i) => (
            <li key={i} className="press-logos__item">
              <PressLogo {...logo} />
            </li>
          ))}
        </ul>

        <div>
          <PressGroup title="Press About Pamela" data={aboutPam} />
          <PressGroup title="Press By Pamela" data={byPam} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query PressPageQuery {
    allContentfulPressPage {
      edges {
        node {
          headline
          hero {
            description
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          asSeenOn {
            title
            fluid(maxWidth: 660) {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
          pressByPamela {
            headline
            publication
            publicationUrl
          }
          pressAboutPamela {
            headline
            publication
            publicationUrl
            byline
          }
        }
      }
    }
  }
`
export default PressPage
