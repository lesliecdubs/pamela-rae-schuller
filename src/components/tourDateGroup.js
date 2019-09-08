import React from 'react'
import { TourDate } from './'

const TourDateGroup = ({ 
  title, 
  shows, 
  past = false, 
  showType = false 
}) => (
  <section>
    <h2>{title}</h2>
    <ul className="tour">
      {shows.map((show, i) => (
        <li key={i} className="tour__date">
          <TourDate showType={showType} past={past} {...show} />
        </li>
      ))}
    </ul>
  </section>
)

export default TourDateGroup
