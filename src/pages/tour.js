import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Layout, TourDateGroup } from '../components'
import { 
  normalizeTourPage, 
  normalizeTourDate,
  getUpcomingShows,
  getPastShows,
  sortByAscendingDate,
  sortByDescendingDate
} from '../helpers'

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
    const { headline, description } = this._tourPage
    const upcomingShows = sortByAscendingDate(getUpcomingShows(this._tourDates))
    const pastShows = sortByDescendingDate(getPastShows(this._tourDates))

    return (
      <Layout style="page--scroll" pageName={headline}>
        <p>{description}</p>

        {upcomingShows && upcomingShows.length > 0 && (
          <TourDateGroup 
            title="Upcoming Shows" 
            shows={upcomingShows} 
            showType={true}
          />
        )}

        {pastShows && pastShows.length > 0 && (
          <TourDateGroup 
            title="Past Shows" 
            past={true}
            shows={pastShows} 
            showType={true}
          />
        )}
      </Layout>
    )
  }
}

// TODO: filter upcoming shows to only show those in the future
export const query = graphql`
  query TourPageQuery {
    allContentfulTourPage {
      edges {
        node {
          headline
          description {
            description
          }
        }
      }
    }
    allContentfulTourDates {
      edges {
        node {
          ...TourDateFragment
        }
      }
    }
  }
`
export default TourPage
