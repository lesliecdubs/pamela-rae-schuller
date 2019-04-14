import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
import { normalizeMeetPage } from '../helpers'
import Img from 'gatsby-image'

class MeetPage extends Component {
  constructor(props) {
    super(props)
    this._meetPage = normalizeMeetPage(
      props.data.allContentfulMeetPamPage.edges[0].node
    )
  }

  render() {
    const { bioIntro, bio, headshot, description } = this._meetPage

    return (
      <Layout style="page--scroll">
        <div className="contain rich-text">
          <h1>Meet Pam</h1>
          <p>{bioIntro}</p>
          <Img className="rich-text__img" fluid={headshot} alt={description} />
          <div dangerouslySetInnerHTML={{ __html: bio }} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query MeetPageQuery {
    allContentfulMeetPamPage {
      edges {
        node {
          headshot {
            description
            fluid(maxWidth: 613) {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
          bioIntro {
            bioIntro
          }
          bio {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
export default MeetPage
