import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout, LinkBtn } from '../components'
import { normalizeHomepage } from '../helpers'
import Img from 'gatsby-image'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this._homepage = normalizeHomepage(
      props.data.allContentfulHomePage.edges[0].node
    )
  }

  render() {
    const { headline, description, cta, ctaLink } = this._homepage
    const { pamPrimary, pamPrimaryMobile } = this.props.data

    return (
      <Layout>
        <Img
          className="home-img--mobile is-hidden-md"
          fluid={pamPrimaryMobile.childImageSharp.fluid}
        />
        <div className="home contain">
          <div className="home__content">
            <h1>{headline}</h1>
            <p>{description}</p>
            <LinkBtn to={ctaLink} className="cta">
              {cta}
            </LinkBtn>
          </div>
          <Img
            className="home-img is-visible-md"
            fluid={pamPrimary.childImageSharp.fluid}
            alt="Pam smiling with hands on hips"
          />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    allContentfulHomePage {
      edges {
        node {
          headline
          description {
            description
          }
          callToActionLink {
            __typename
            ... on ContentfulMeetPamPage {
              page
            }
          }
          callToActionText
        }
      }
    }
    pamPrimary: file(relativePath: { eq: "pam-primary.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    pamPrimaryMobile: file(relativePath: { eq: "pam-primary-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default HomePage
