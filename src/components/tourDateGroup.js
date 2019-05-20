import React, { Fragment } from 'react'
import { TourDate } from './'

const TourDateGroup = ({ title, shows }) => (
  <section>
    <h2>{title}</h2>
    <ul className="tour">
      {shows.map((show, i) => (
        <li key={i} className="tour__date">
          <TourDate {...show} />
        </li>
      ))}
    </ul>
  </section>
)

export default TourDateGroup
