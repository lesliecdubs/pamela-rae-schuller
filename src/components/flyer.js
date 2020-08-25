import React from 'react'
import { LinkBtn } from './'
import Img from 'gatsby-image'

const Flyer = ({ title, file, image }) => (
  <LinkBtn to={`http:${file}`} className="flyer__link">
    <Img fluid={image} alt={`Flyer: ${title}`} />
  </LinkBtn>
)

export default Flyer
