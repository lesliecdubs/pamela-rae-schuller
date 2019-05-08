import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Layout, TourDate } from '../components'
import { normalizeTourDate } from '../helpers'

class TourPage extends Component {
  constructor(props) {
    super(props)
    this._tourDates = props.data.allContentfulTourDates.edges.map(s =>
      normalizeTourDate(s.node)
    )
  }

  render() {
    return (
      <Layout style="page--scroll" pageName="Tour">
        <section className="contain">
          <h1>Upcoming Shows</h1>

          {this._tourDates && (
            <ul>
              {this._tourDates.map((show, i) => (
                <li key={i}>
                  <TourDate {...show} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </Layout>
    )
  }
}

// TODO: filter upcoming shows to only show those in the future
export const query = graphql`
  query TourPageQuery {
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
