import React from 'react'
import Img from 'gatsby-image'

const PressLogo = ({ title, image }) => (
  <figure>
    <figcaption className="is-visually-hidden">
      {title}
    </figcaption>
    <Img fluid={image} alt={title} />
  </figure>
)

export default PressLogo
