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
    const { headline, asSeenOn, byPam, aboutPam } = this._pressPage

    return (
      <Layout style="page--scroll" pageName={headline}>
        <h2>As Seen On</h2>
        <ul>
          {asSeenOn.map((logo, i) => (
            <li key={i}>
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
          asSeenOn {
            title
            fluid(maxWidth: 660) {
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
        }
      }
    }
  }
`
export default PressPage
