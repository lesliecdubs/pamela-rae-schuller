import React from 'react'
import { Social } from './'
import { allRoutes, menuRoutes } from '../helpers/routes'
import cn from 'classnames'

const Footer = () => (
  <footer className="footer">
    <Social />
    <p>&copy; {(new Date().getFullYear())} Pamela Comedy</p>
  </footer>
)

export default Footer
