import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components'
import Img from 'gatsby-image'

const HomePage = ({ data }) => {
  const {
    headline,
    description,
    video,
  } = data.allContentfulHomePage.edges[0].node

  return (
    <Layout>
      <div className="page-fit">
        <div className="page-fit__content contain contain--tight">
          <div className="page-fit__content__copy">
            <h1>{headline}</h1>
            <p>{description.description}</p>
          </div>
          <Img
            className="page-fit__content__image"
            fluid={data.pamPrimary.childImageSharp.fluid}
            alt="Pam smiling with hands on hips"
          />
        </div>
        <div className="page-fit__video">
          <video muted loop autoPlay playsInline>
            <source src={video.file.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allContentfulHomePage {
      edges {
        node {
          headline
          description {
            description
          }
          video {
            file {
              url
              fileName
            }
          }
          callToActionText
        }
      }
    }
    pamPrimary: file(relativePath: { eq: "pam-primary.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default HomePage