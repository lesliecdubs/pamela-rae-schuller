import React, { Fragment } from 'react'
import { LinkBtn } from './'

const TourDate = ({ title, date, venue, venueLink, type, audience, link, flyer }) => (
  <Fragment>
    <h3>{title}</h3>
    <time>{date}</time>
    <p>
      <LinkBtn to={venueLink}>{venue}</LinkBtn>
    </p>
    <p>{type}</p>
    <p>{audience}</p>
    {flyer && <LinkBtn to={flyer.file}>Flyer</LinkBtn>}
    {link && <LinkBtn to={link}>Get tickets</LinkBtn>}
  </Fragment>
)

export default TourDate
