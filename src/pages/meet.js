import React from 'react'
import { LayoutViewportHeight, LinkBtn } from '../components'

const SecondPage = () => (
  <LayoutViewportHeight>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <LinkBtn to="/">Go back to the homepage</LinkBtn>
  </LayoutViewportHeight>
)

export default SecondPage
