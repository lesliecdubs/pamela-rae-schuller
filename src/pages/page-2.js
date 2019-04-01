import React from 'react'
import { Layout, LinkBtn } from '../components'

const MeetPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <LinkBtn to="/">Go back to the homepage</LinkBtn>
  </Layout>
)

export default MeetPage
