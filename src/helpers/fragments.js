import { graphql } from 'gatsby'

export const flyerFragment = graphql`
  fragment FlyerFragment on ContentfulTourFlyers {
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
`

export const tourDateFragment = graphql`
  fragment TourDateFragment on ContentfulTourDates {
    title
    date
    city
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
    relevantFlyer {
      ...FlyerFragment
    }
  }
`
