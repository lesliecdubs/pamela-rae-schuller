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

        {/* <p className="form-message">Interested in booking Pam?</p>
        <p className="form-message">Send us an email with details and your ideal event date, and we'll get back to you.</p>
        <p className="form-message">
          <a href="mailto:booking@pamelacomedy.com?subject=Booking%20Request%20" className="cta">Contact Us</a>
        </p> */}

        <form
          className="form"
          method="post"
          action="#"
          data-netlify="true"
          name="contact"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="name">
              Full name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First Last"
              required
            />
          </div>

          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@me.com"
              required
            />
          </div>

          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(222) 222-2222"
            />
          </div>

          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="org">
              Company
            </label>
            <input type="text" name="org" id="org" placeholder="Organization" />
          </div>

          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="date">
              Ideal date
            </label>
            <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" />
          </div>

          <div className="form__group form__group--split">
            <label className="form__label" htmlFor="age">
              Age group
            </label>
            <input type="age" name="age" id="age" placeholder="18+" />
          </div>

          <div className="form__group form__group--checkboxes">
            <p className="form__label">Type of show</p>
            <div className="form__group--checkboxes__all">
              <label className="checkbox">
                Keynote
                <input type="checkbox" name="typeOfShow" value="Keynote" />
                <span className="checkbox__box" tabIndex="1" />
              </label>
              <label className="checkbox">
                Workshop
                <input type="checkbox" name="typeOfShow" value="Workshop" />
                <span className="checkbox__box" tabIndex="1" />
              </label>
              <label className="checkbox">
                Professional development
                <input
                  type="checkbox"
                  name="typeOfShow"
                  value="Professional development"
                />
                <span className="checkbox__box" tabIndex="1" />
              </label>
              <label className="checkbox">
                Motivational
                <input type="checkbox" name="typeOfShow" value="Motivational" />
                <span className="checkbox__box" tabIndex="1" />
              </label>
              <label className="checkbox">
                Stand-up
                <input type="checkbox" name="typeOfShow" value="Stand-up" />
                <span className="checkbox__box" tabIndex="1" />
              </label>
              <label className="checkbox">
                Other
                <input type="checkbox" name="typeOfShow" value="Other" />
                <span className="checkbox__box" tabIndex="1" />
              </label>
            </div>
          </div>

          <div className="form__group">
            <button type="submit" className="cta">
              Submit
            </button>
          </div>
        </form>

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
