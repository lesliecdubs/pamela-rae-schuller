import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { LayoutNoMenu, LinkBtn } from '../components'
import { normalizeLinksPage } from '../helpers'
// import Img from 'gatsby-image'

class LinksPage extends Component {
  constructor(props) {
    super(props)
    this._linkPage = normalizeLinksPage(
      props.data.allContentfulLinktreeLinksPage.edges[0].node
    )
  }

  render() {
    const { headline, links } = this._linkPage

    return (
      <LayoutNoMenu pageName={`${headline} | Pamela Rae Schuller`}>
        <header>
          <h1 className="is-hidden">{headline}</h1>
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
          headline
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
