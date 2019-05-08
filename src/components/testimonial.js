import React from 'react'
import Img from 'gatsby-image'

const Testimonial = ({
  headshot,
  headshotAlt,
  quote,
  name,
  title,
  organization,
}) => (
  <blockquote>
    {/* {headshot && <Img className="" fluid={headshot} alt={headshotAlt} />} */}
    <p>{quote}</p>
    <cite>
      <p>{name}</p>
      {(title || organization) && (
        <p>
          {title && `${title}, `}
          {organization && organization}
        </p>
      )}
    </cite>
  </blockquote>
)

export default Testimonial
