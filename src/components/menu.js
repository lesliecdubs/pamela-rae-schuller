import React, { useState } from 'react'
import { LinkBtn, Social } from './'
import { Logo } from '../assets/images'
import { allRoutes, menuRoutes } from '../helpers/routes'
import cn from 'classnames'

const Menu = ({ isSquished }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={cn('menu-wrapper', {
        'is-open': isOpen,
        'is-squished': isSquished,
      })}
    >
      <div className="menu-wrapper-group">
        <div className="menu-bar">
          <LinkBtn to={allRoutes.home} className="menu-brand__logo">
            <Logo />
          </LinkBtn>

          <button
            className={cn('menu-brand__btn is-hidden-desktop', {
              'is-open': isOpen,
            })}
            onClick={handleClick}
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* menu items / interior drawer nav on mobile */}
        <div className="menu">
          <ul className="menu__list">
            {menuRoutes.map(route => (
              <li key={route.path} className="menu__item">
                <LinkBtn to={route.path} className="link--drop-in">
                  {route.name}
                </LinkBtn>
              </li>
            ))}
            <li className="is-hidden-desktop">
              <Social />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
