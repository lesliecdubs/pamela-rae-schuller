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
    const { title, packages, pastGigTypes } = this._bookingPage

    return (
      <Layout style="page--scroll" pageName={title}>
        <section>
          <h2>Packages</h2>
          <ul>
            {packages.map((pack, i) => (
              <li key={i}>
                <Img fluid={pack.image} alt={pack.imageAlt} />
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
              </li>
            ))}
          </ul>

          <p>Pamela is available for the following: </p>
          <ul>
            {pastGigTypes.map((gig, i) => (
              <li key={i}>{gig}</li>
            ))}
          </ul>
        </section>

        <form>
          <div>
            <label htmlFor="name">Full name*</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email address*</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="org">Organization / Company</label>
            <input type="text" name="org" id="org" />
          </div>
          <div>
            <label htmlFor="date">Ideal date</label>
            <input
              type="date"
              id="date"
              name="date"
              defaultValue={new Date()}
              min={new Date()}
            />
          </div>
          <div>
            <label htmlFor="org">Type of show</label>
            <input type="checkbox" name="typeOfShow" value="Performance" />
            Performance
            <input type="checkbox" name="typeOfShow" value="Workshop" />
            Workshop
            <input
              type="checkbox"
              name="typeOfShow"
              value="Professional Development"
            />
            Professional Development
            <input type="checkbox" name="typeOfShow" value="Motivational" />
            Motivational
            <input type="checkbox" name="typeOfShow" value="Other" />
            Other
          </div>
          <div>
            <label htmlFor="age">Age group</label>
            <input type="age" name="age" id="age" />
          </div>
        </form>
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
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
          pastGigTypes
        }
      }
    }
  }
`
export default BookingPage
