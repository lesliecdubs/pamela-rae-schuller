import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Layout, TourDate, LinkBtn, VideoSection } from '../components'
import { normalizeComedyPage, normalizeTourDate } from '../helpers'
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
    const { headline, description, flyers, videos } = this._comedyPage

    return (
      <Layout style="page--scroll" pageName={headline}>
        <div className="contain">
          <h1>{headline}</h1>
          <p>{description}</p>

          {this._comedyShows && (
            <section>
              <h2>Upcoming Shows</h2>
              <ul>
                {this._comedyShows.map((show, i) => (
                  <li key={i}>
                    <TourDate {...show} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {flyers && (
            <section>
              <ul>
                {flyers.map((flyer, i) => {
                  return (
                    <li key={i}>
                      <LinkBtn to={`http:${flyer.file}`}>
                        <Img fluid={flyer.image} alt="" />
                      </LinkBtn>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          {videos && <VideoSection videos={videos} />}
        </div>
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
            flyerName
            flyerPdf {
              fluid(maxWidth: 660) {
                sizes
                src
                srcSet
                aspectRatio
              }
              file {
                url
                contentType
              }
              title
            }
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
          title
          date(formatString: "dddd, MMMM Do, YYYY, h:mm a")
          venueName
          googleMapsLink
          typeOfShow {
            typeOfShow
          }
          audienceAge {
            audienceAge
          }
          ticketLink
          comedyShow
        }
      }
    }
  }
`
export default ComedyPage
