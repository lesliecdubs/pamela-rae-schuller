import React from 'react'
import { LinkBtn } from './'
import { SocialFacebook, SocialTwitter, SocialInstagram } from '../assets/images'
import { socialRoutes } from '../helpers/routes'

const COMPONENTS = {
  Facebook: SocialFacebook,
  Twitter: SocialTwitter,
  Instagram: SocialInstagram
};

const Social = props => (
  <ul className="menu__list-social">
    {socialRoutes.map(route => {
      const Icon = COMPONENTS[route.name];
      return (
        <li key={route.path} className="menu__list-social__item">
          <LinkBtn to={route.path}>
            <Icon />
            <span className="is-visually-hidden">{route.name}</span>
          </LinkBtn>
        </li>
      )
    })}
  </ul>
)

export default Social