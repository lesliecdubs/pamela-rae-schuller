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
  }
`
