import React from 'react'
import { LinkBtn } from './'

const PressGroup = ({ title, data }) => (
  <section>
    <h2>{title}</h2>
    <ul>
      {data.map((press, i) => (
        <li key={i}>
          <LinkBtn to={press.publicationUrl}>{press.headline}</LinkBtn>
          <p>{press.publication}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default PressGroup
