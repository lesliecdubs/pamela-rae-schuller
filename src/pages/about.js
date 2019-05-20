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
      bioImage,
      bioImageAlt,
      bioPartTwo
    } = this._meetPage

    return (
      <Layout style="page--scroll" pageName="Meet Pam">
        <Img
          fluid={hero} 
          alt={heroAlt} 
          className="is-visible-sm" 
        />
        <p>{bioIntro}</p>

        <div className="page-section__longform rich-text">
          <div
            className="rich-text__content"
            dangerouslySetInnerHTML={{ __html: bio }}
          />
          {bioImage &&
            <Img
              fluid={bioImage} 
              alt={bioImageAlt} 
            />
          }
          <div
            className="rich-text__content"
            dangerouslySetInnerHTML={{ __html: bioPartTwo }}
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
              ...GatsbyContentfulFluid_tracedSVG
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
          bioImage {
            description
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          bioPartTwo {
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
