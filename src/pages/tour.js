import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Layout, TourDateGroup } from '../components'
import {
  normalizeTourPage,
  normalizeTourDate,
  getUpcomingShows,
  sortByAscendingDate,
} from '../helpers'
import Img from 'gatsby-image'

class TourPage extends Component {
  constructor(props) {
    super(props)
    this._tourPage = normalizeTourPage(
      props.data.allContentfulTourPage.edges[0].node
    )
    this._tourDates = props.data.allContentfulTourDates.edges.map(s =>
      normalizeTourDate(s.node)
    )
  }

  render() {
    const {
      headline,
      hero,
      heroAlt,
      separator,
      separatorAlt,
      description,
      pastShows,
    } = this._tourPage
    const upcomingShows = sortByAscendingDate(getUpcomingShows(this._tourDates))

    return (
      <Layout style="page--scroll" pageName={headline}>
        <Img fluid={hero} alt={heroAlt} className="is-visible-sm" />
        <p>{description}</p>

        {upcomingShows && upcomingShows.length > 0 && (
          <Fragment>
            <TourDateGroup
              title="Upcoming Shows"
              shows={upcomingShows}
              showType={true}
            />
            <Img
              fluid={separator}
              alt={separatorAlt}
              className="tour__separator is-visible-md"
            />
          </Fragment>
        )}

        <section className="gigs">
          <p className="gigs__intro">
            Pam has performed in six countries, almost every state in the US,
            and for well over 100,000 people, at places like:{' '}
          </p>
          <ul className="gigs__list">
            {pastShows.map((gig, i) => (
              <li key={i} className="gigs__item">
                {gig.place}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query TourPageQuery {
    allContentfulTourPage {
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
          separatorImage {
            description
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          pastShows {
            place
          }
        }
      }
    }
    allContentfulTourDates(filter: { comedyShow: { eq: false } }) {
      edges {
        node {
          ...TourDateFragment
        }
      }
    }
  }
`
export default TourPage
