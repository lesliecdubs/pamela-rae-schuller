import React from 'react'
import { Social } from './'

const Footer = ({ withSocial = true }) => (
  <footer className="footer">
    {withSocial ? <Social /> : null}
    <p>&copy; {new Date().getFullYear()} Pamela Comedy</p>
  </footer>
)

export default Footer
