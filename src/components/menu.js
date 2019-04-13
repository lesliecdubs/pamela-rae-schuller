import React, { Component } from 'react'
import { LinkBtn, Social } from './'
import { Logo } from '../assets/images'
import { allRoutes, menuRoutes, socialRoutes } from '../helpers/routes'
import cn from 'classnames'

export default class Menu extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state
    const { isSquished } = this.props

    return (
      <nav
        className={cn('menu-wrapper', {
          'is-open': open,
          'is-squished': isSquished,
        })}
      >
        <div className="menu-bar">
          <LinkBtn to={allRoutes.home} classNames={['menu-brand__logo']}>
            <Logo />
          </LinkBtn>

          <button
            className={cn('menu-brand__btn is-hidden-desktop', {
              'is-open': open,
            })}
            onClick={this.handleClick}
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
      </nav>
    )
  }
}
