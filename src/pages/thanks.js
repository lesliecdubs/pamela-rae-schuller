import React, { Component } from 'react'
import { Layout } from '../components'
import { graphql } from 'gatsby'
import { normalizeThanksPage } from '../helpers'
import Img from 'gatsby-image'

class ThanksPage extends Component {
  constructor(props) {
    super(props)
    this._thanksPage = normalizeThanksPage(
      props.data.allContentfulBookingPage.edges[0].node
    )
  }

  render() {
    const { separator, separatorAlt } = this._thanksPage

    return (
      <Layout style="page--scroll" pageName="Thanks">
        <Img
          fluid={separator}
          alt={separatorAlt}
          className="gig-separator is-visible-sm"
        />

        <p className="thanks__p">
          We’ve received your submission and will be in touch soon!
        </p>
        <p className="thanks__p">Have more to say?</p>
        <p className="thanks__p">
          <a
            href="mailto:booking@pamelacomedy.com?subject=Booking%20Request%20"
            className="cta"
          >
            Email Us
          </a>
        </p>
      </Layout>
    )
  }
}

export const query = graphql`
  query ThanksPageQuery {
    allContentfulBookingPage {
      edges {
        node {
          separator {
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ThanksPage
