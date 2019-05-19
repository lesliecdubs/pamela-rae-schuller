import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
import { normalizeMeetPage } from '../helpers'
import Img from 'gatsby-image'

class MeetPage extends Component {
  constructor(props) {
    super(props)
    this._meetPage = normalizeMeetPage(
      props.data.allContentfulMeetPamPage.edges[0].node
    )
  }

  render() {
    const {
      hero,
      heroAlt,
      bioIntro,
      bio,
      headshot,
      headshotAlt,
    } = this._meetPage

    return (
      <Layout style="page--scroll" pageName="Meet Pam">
        <Img fluid={hero} alt={heroAlt} className="is-visible-md" />
        <div className="page-section__longform rich-text">
          <p className="rich-text__intro">{bioIntro}</p>
          <Img className="rich-text__img" fluid={headshot} alt={headshotAlt} />
          <div
            className="rich-text__content"
            dangerouslySetInnerHTML={{ __html: bio }}
          />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query MeetPageQuery {
    allContentfulMeetPamPage {
      edges {
        node {
          hero {
            description
            fluid(maxWidth: 1600) {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
          headshot {
            description
            fluid(maxWidth: 613) {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
          bioIntro {
            bioIntro
          }
          bio {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
export default MeetPage
