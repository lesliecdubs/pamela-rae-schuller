import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

class NotFoundPage extends Component {
  render() {
    const { pamHotMess } = this.props.data

    return (
      <Layout pageName="Not Found" style="page--scroll">
        <div className="four-oh-four">
          <Img className="four-oh-four__image" fluid={pamHotMess.childImageSharp.fluid} />
          <section className="four-oh-four__copy">
            <h2>Well, this is awkward...</h2>
            <p>That page doesn't exist.{" "}
              <a className="link--underline" href="/">
                <span>Go home!</span>
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query FourOhFourPageQuery {
    pamHotMess: file(relativePath: { eq: "pam-hot-mess.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default NotFoundPage
