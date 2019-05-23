import React from 'react'
import Img from 'gatsby-image'

const Testimonial = ({
  headshot,
  headshotAlt,
  quote,
  name,
  title,
  featured,
}) => (
  <blockquote
    className={featured ? 'blockquote blockquote--featured' : 'blockquote'}
  >
    <p>“{quote}”</p>
    <cite>
      {headshot ? (
        <Img
          className="blockquote__headshot"
          fluid={headshot}
          alt={headshotAlt}
        />
      ) : (
        <div className="blockquote__headshot">
          <span className="blockquote__headshot-placeholder">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        {title && <p>{title}</p>}
      </div>
    </cite>
  </blockquote>
)

export default Testimonial
