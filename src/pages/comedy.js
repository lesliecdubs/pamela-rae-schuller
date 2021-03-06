import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  TourDateGroup,
  Flyer,
  LinkBtn,
  VideoSection,
} from '../components'
import {
  normalizeComedyPage,
  normalizeTourDate,
  getUpcomingShows,
  sortByAscendingDate,
} from '../helpers'
import Img from 'gatsby-image'

class ComedyPage extends Component {
  constructor(props) {
    super(props)
    this._comedyPage = normalizeComedyPage(
      props.data.allContentfulComedyPage.edges[0].node
    )
    this._comedyShows = props.data.allContentfulTourDates.edges.map(s =>
      normalizeTourDate(s.node)
    )
  }

  render() {
    const {
      headline,
      hero,
      heroAlt,
      description,
      videos,
      pastShows,
    } = this._comedyPage
    const upcomingShows = sortByAscendingDate(
      getUpcomingShows(this._comedyShows)
    )

    return (
      <Layout style="page--scroll" pageName={headline}>
        <Img fluid={hero} alt={heroAlt} className="is-visible-sm" />
        <p>{description}</p>

        {upcomingShows && upcomingShows.length > 0 && (
          <TourDateGroup title="Upcoming Comedy" shows={upcomingShows} />
        )}

        {videos && (
          <section>
            <VideoSection videos={videos} title="Comedy Clips" />
          </section>
        )}

        {pastShows && (
          <section>
            <h2>Places Pam Has Performed</h2>
            <ul className="comedy">
              {pastShows.map((place, index) => (
                <li key={index} className="comedy__logo">
                  <Img fluid={place.logo} alt={place.place} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query ComedyPageQuery {
    allContentfulComedyPage {
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
          comedyVideos {
            videoTitle
            videoProducer {
              videoProducer
            }
            videoUrl
          }
          placesPamPerformedComedy {
            place
            placeLogo {
              fluid(maxWidth: 660) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    allContentfulTourDates(filter: { comedyShow: { eq: true } }) {
      edges {
        node {
          ...TourDateFragment
        }
      }
    }
  }
`
export default ComedyPage
