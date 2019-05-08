import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { LinkBtn } from './'

const TourDate = ({ title, date, venue, venueLink, type, audience, link }) => (
  <Fragment>
    <h3>{title}</h3>
    <time>{date}</time>
    <p>
      <LinkBtn to={venueLink}>{venue}</LinkBtn>
    </p>
    <p>{type}</p>
    <p>{audience}</p>
    {link && <LinkBtn to={link} />}
  </Fragment>
)

export default TourDate
