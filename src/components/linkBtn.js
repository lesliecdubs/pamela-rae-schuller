import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class LinkBtn extends Component {
  constructor(props) {
    super(props)
    // detect if external link (http)
    this._isExternalLink = /^(http|mailto)/.test(props.to)
  }

  render() {
    const { to, classNames, attrs, children } = this.props;

    const linkMarkup = this._isExternalLink ? (
      <a
        href={to}
        target={this._isExternalLink ? '_blank' : '_self'}
        className={classNames ? classNames.join(' ').trim() : null}
        {...attrs}
      >
        {children}
      </a>
    ) : (
      <Link
        to={`/${to}`}
        className={classNames ? classNames.join(' ').trim() : null}
        activeClassName="active"
        {...attrs}
      >
        {children}
      </Link>
    )

    return linkMarkup
  }
}
