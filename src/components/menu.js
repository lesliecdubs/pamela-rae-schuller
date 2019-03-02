import React from 'react'
import { Link } from 'gatsby'
import { Logo } from '../assets/images'
import { allRoutes, menuRoutes } from '../helpers/routes'

const Menu = ({ siteTitle }) => (
  <nav className="menu-bar">
    <div className="contain">
      <ul className="menu">
        <li className="menu__item">
          <Link to={allRoutes.home}>
            <Logo />
          </Link>
        </li>
        {menuRoutes.map(route => (
          <li key={route.path} className="menu__item">
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default Menu
