import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class LinkBtn extends Component {
  constructor(props) {
    super(props)
    // detect if external link (http)
    this._isExternalLink = /^(http|mailto)/.test(props.to)
  }

  render() {
    const { to, className, download, attrs, children } = this.props

    const linkMarkup =
      this._isExternalLink || download ? (
        <a
          href={to}
          target={this._isExternalLink ? '_blank' : '_self'}
          className={className}
          download={download ? true : false}
          {...attrs}
        >
          {children}
        </a>
      ) : (
        <Link
          to={`/${to}`}
          className={className}
          activeClassName="active"
          {...attrs}
        >
          {children}
        </Link>
      )

    return linkMarkup
  }
}
