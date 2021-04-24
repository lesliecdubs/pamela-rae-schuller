import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { LayoutNoMenu, LinkBtn } from '../components'
import { Logo } from '../assets/images'
import { normalizeLinksPage } from '../helpers'
import { allRoutes } from '../helpers/routes'
import Img from 'gatsby-image'

class LinksPage extends Component {
  constructor(props) {
    super(props)
    this._linkPage = normalizeLinksPage(
      props.data.allContentfulLinktreeLinksPage.edges[0].node
    )
  }

  render() {
    const { pageName, photo, photoAlt, links } = this._linkPage
    const title = `${pageName} | Pamela Rae Schuller`

    return (
      <LayoutNoMenu pageName={title}>
        <header>
          <h1 className="is-hidden">{title}</h1>
          <Img
            className="links__profile-picture"
            fluid={photo} 
            alt={photoAlt} 
          />
          <Logo className="links__logo" />
        </header>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <LinkBtn to={link.link} className="cta cta--centered">
                {link.linkText}
              </LinkBtn>
            </li>
          ))}
        </ul>
      </LayoutNoMenu>
    )
  }
}

export const query = graphql`
  query LinksPageQuery {
    allContentfulLinktreeLinksPage {
      edges {
        node {
          pageName
          profilePicture {
            description
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          links {
            linkText
            linkUrl
          }
        }
      }
    }
  }
`
export default LinksPage
