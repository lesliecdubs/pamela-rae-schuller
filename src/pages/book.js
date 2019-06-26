import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
import { normalizeBookingPage } from '../helpers'
import Img from 'gatsby-image'

class BookingPage extends Component {
  constructor(props) {
    super(props)
    this._bookingPage = normalizeBookingPage(
      props.data.allContentfulBookingPage.edges[0].node
    )
  }

  render() {
    const {
      title,
      packages,
      separator,
      separatorAlt,
      pastGigTypes,
    } = this._bookingPage

    return (
      <Layout style="page--scroll" pageName={title}>
        <Img
          fluid={separator}
          alt={separatorAlt}
          className="gig-separator is-visible-sm"
        />

        <p className="form-message">Interested in booking Pam?</p>
        <p className="form-message">Send us an email with details and your ideal event date, and we'll get back to you.</p>
        <p className="form-message">
          <a href="mailto:booking@pamelacomedy.com?subject=Booking%20Request%20" className="cta">Contact Us</a>
        </p>

        <section>
          <h2 className="is-visually-hidden">Packages</h2>
          <ul className="packages">
            {packages.map((pack, i) => (
              <li key={i} className="packages__package">
                <Img
                  fluid={pack.image}
                  alt={pack.imageAlt}
                  className="packages__package-image"
                />
                <div>
                  <h3 className="packages__package-title">{pack.name}</h3>
                  <p className="packages__package-info">{pack.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="gigs">
          <p className="gigs__intro">
            Pam has worked with a wide variety of communities and organizations,
            including:{' '}
          </p>
          <ul className="gigs__list">
            {pastGigTypes.map((gig, i) => (
              <li key={i} className="gigs__item">
                {gig}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query BookingPageQuery {
    allContentfulBookingPage {
      edges {
        node {
          title
          packages {
            packageName
            packageDescription {
              packageDescription
            }
            packageImage {
              fluid(maxWidth: 660) {
                aspectRatio
                srcSet
                src
                sizes
              }
            }
          }
          separator {
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          pastGigTypes
        }
      }
    }
  }
`
export default BookingPage
