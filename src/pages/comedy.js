import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Layout, TourDateGroup, Flyer, LinkBtn, VideoSection } from '../components'
import { normalizeComedyPage, normalizeTourDate } from '../helpers'
import Img from 'gatsby-image'
import moment from 'moment'

function getUpcomingShows(showList) {
  const now = moment()
  return showList.filter(show => moment(show.date).isAfter(now));
}

function getPastShows(showList) {
  const now = moment()
  return showList.filter(show => moment(show.date).isBefore(now));
}

function sortByAscendingDate(array) {
  return array.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date)
  });
}

function sortByDescendingDate(array) {
  return array.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date)
  });
}

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
    const { headline, description, flyers, videos } = this._comedyPage
    const upcomingShows = sortByAscendingDate(getUpcomingShows(this._comedyShows))
    const pastShows = sortByDescendingDate(getPastShows(this._comedyShows))

    return (
      <Layout style="page--scroll" pageName={headline}>
        <p>{description}</p>

        {upcomingShows && upcomingShows.length > 0 && (
          <TourDateGroup title="Upcoming Shows" shows={upcomingShows} />
        )}

        {flyers && (
          <section>
            <h2>Flyers</h2>
            <ul className="flyers">
              {flyers.map((flyer, i) => {
                return (
                  <li key={i} className="flyer">
                    <Flyer 
                      title={flyer.title} 
                      file={flyer.file} 
                      image={flyer.image} 
                    />
                  </li>
                )
              })}
            </ul>
          </section>
        )}

        {videos && <VideoSection videos={videos} title="Comedy Clips" />}

        {pastShows && pastShows.length > 0 && (
          <TourDateGroup title="Past Shows" shows={pastShows} />
        )}
      </Layout>
    )
  }
}

// TODO: fix time zone in date format
// TODO: filter upcoming shows to only show those in the future
export const query = graphql`
  query ComedyPageQuery {
    allContentfulComedyPage {
      edges {
        node {
          headline
          description {
            description
          }
          showFlyers {
            ...FlyerFragment
          }
          comedyVideos {
            videoTitle
            videoProducer {
              videoProducer
            }
            videoUrl
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
