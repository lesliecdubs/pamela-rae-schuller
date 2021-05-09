import React from 'react'
import cn from 'classnames'
import { Social } from './'

const Footer = ({ withSocial = true }) => (
  <footer className={cn('footer', { 'footer--copyright-only': !withSocial })}>
    {withSocial ? <Social /> : null}
    <p>&copy; {new Date().getFullYear()} Pamela Comedy</p>
  </footer>
)

export default Footer
