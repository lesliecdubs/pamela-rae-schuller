import React from 'react'
import Img from 'gatsby-image'

const Testimonial = ({
  headshot,
  headshotAlt,
  quote,
  name,
  title,
  organization,
  featured,
}) => (
  <blockquote
    className={featured ? 'blockquote blockquote--featured' : 'blockquote'}
  >
    <p>“{quote}”</p>
    <cite>
      {headshot && (
        <Img
          className="blockquote__headshot"
          fluid={headshot}
          alt={headshotAlt}
        />
      )}
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        {title && <p>{title}</p>}
        {organization && (
          <p>
            <em>{organization}</em>
          </p>
        )}
      </div>
    </cite>
  </blockquote>
)

export default Testimonial
