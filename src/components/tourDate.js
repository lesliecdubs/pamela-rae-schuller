import React, { Fragment } from 'react'
import { Flyer, LinkBtn } from './'
import moment from 'moment'

function formatDate(timestamp) {
  const llll = moment.parseZone(timestamp).format('llll')
  const lt = moment.parseZone(timestamp).format('LT')
  const finalVal = llll.replace(lt, '')
  const array = finalVal.replace(/,/g, '').match(/[^ ]+/g) // remove commas and spaces

  // adds leading zero to single digit dates
  if (array[2].length === 1) {
    array[2] = `0${array[2]}`
  }

  array.shift() // removes day of the week
  return array
}

function formatTime(timestamp) {
  return moment(timestamp).format('LT')
}

const TourDate = ({
  date,
  city,
  venue,
  venueLink,
  type,
  audience,
  link,
  flyer,
  past,
  showType,
}) => (
  <Fragment>
    <h3 className="tour__datetime-wrap">
      <time className="tour__datetime">
        {formatDate(date).map((day, i) => (
          <p key={i}>{day}</p>
        ))}
      </time>
    </h3>
    <div className="tour__info">
      <p className="tour__city">{city}</p>
      <div className="tour__details">
        <time>{formatTime(date)}</time>
        {venueLink ? (
          <LinkBtn to={venueLink} className="tour__venue-link">
            {venue}
          </LinkBtn>
        ) : (
          <p className="tour__venue-name">{venue}</p>
        )}
      </div>
      <div className="tour__details">
        <p>
          {showType && `${type}, `}
          <em>Ages {audience}</em>
        </p>
      </div>
    </div>
    {((flyer && flyer.file) || link) && (
      <div className="tour__flyer is-visible-md--flex">
        {flyer && (
          <Flyer title={flyer.title} file={flyer.file} image={flyer.image} />
        )}
      </div>
    )}
    <div className="tour__tickets">
      {!past && link && (
        <LinkBtn to={link} className="cta">
          Get tickets
        </LinkBtn>
      )}
    </div>
  </Fragment>
)

export default TourDate
