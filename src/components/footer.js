import React from 'react'
import { Social } from './'

const Footer = () => (
  <footer className="footer">
    <Social />
    <p>&copy; {new Date().getFullYear()} Pamela Comedy</p>
  </footer>
)

export default Footer
