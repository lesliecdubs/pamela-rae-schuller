import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { LayoutHome, LinkBtn } from '../components'
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
    const { headline, description, cta, ctaLink, hero, heroAlt } = this._homepage
    const { pamPrimaryMobile } = this.props.data

    return (
      <LayoutHome>
        <Img
          className="home-img--mobile is-hidden-md"
          fluid={pamPrimaryMobile.childImageSharp.fluid}
        />
        <div className="home home--contain">
          <div className="home__content">
            <h1>{headline}</h1>
            <p>{description}</p>
            <LinkBtn to={ctaLink} className="cta">
              {cta}
            </LinkBtn>
          </div>
          {/* <image
            className="home-img is-visible-md"
            src=""
            alt="Pam smiling, wearing a teal top with navy cardigan and jeans, with hands on hips"
          /> */}
          <Img
            className="home-img is-visible-md"
            fluid={hero}
            alt={heroAlt}
          />
        </div>
      </LayoutHome>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    allContentfulHomePage {
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
          callToActionLink {
            __typename
          }
          callToActionText
        }
      }
    }
    # pamPrimary: file(relativePath: { eq: "pam-primary.png" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 1000) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
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
