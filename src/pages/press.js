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
      description,
      heroAlt,
      asSeenOn,
      separator,
      separatorAlt,
      byPam,
      aboutPam,
      packet,
    } = this._pressPage

    return (
      <Layout style="page--scroll" pageName={headline}>
        <Img fluid={hero} alt={heroAlt} className="is-visible-sm" />
        <p>{description}</p>

        <section>
          <h2>As Seen On</h2>
          <ul className="press-logos">
            {asSeenOn.map((logo, i) => (
              <li key={i} className="press-logos__item">
                <PressLogo {...logo} />
              </li>
            ))}
          </ul>
        </section>

        <Img
          fluid={separator}
          alt={separatorAlt}
          className="tour__separator is-visible-md"
        />

        <div className="press-cols">
          <PressGroup title="Press About Pamela" data={aboutPam} />
          <PressGroup title="Press By Pamela" data={byPam} />
        </div>

        <section className="gigs">
          <p className="gigs__intro">
            Download the press kit for ready-to-use content and assets about
            Pamela.
          </p>
          <LinkBtn to={packet} className="cta" download>
            Download Press Kit
          </LinkBtn>
        </section>
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
          description {
            description
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
          separator {
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
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
          pressPacket {
            file {
              url
            }
          }
        }
      }
    }
  }
`
export default PressPage
