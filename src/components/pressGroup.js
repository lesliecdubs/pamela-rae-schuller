import React from 'react'
import { LinkBtn } from './'

const PressGroup = ({ title, data }) => (
  <section>
    <h2>{title}</h2>
    <ul>
      {data.map((press, i) => (
        <li className="press-cols__item" key={i}>
          <p className="press-cols__link">
            <LinkBtn className="link--underline" to={press.publicationUrl}>
              <span>{press.headline}</span>
            </LinkBtn>
          </p>
          <p>{press.publication}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default PressGroup
