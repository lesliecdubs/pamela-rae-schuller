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

// TODO: fix time zone in date format
export const tourDateFragment = graphql`
  fragment TourDateFragment on ContentfulTourDates {
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
    relevantFlyer {
      ...FlyerFragment
    }
  }
`
