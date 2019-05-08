import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Carousel, Layout, Testimonial, VideoSection } from '../components'
import { normalizeMediaPage } from '../helpers'

class MediaPage extends Component {
  constructor(props) {
    super(props)
    this._mediaPage = normalizeMediaPage(
      props.data.allContentfulMediaPage.edges[0].node
    )
  }

  render() {
    const {
      headline,
      description,
      videos,
      featuredTestimonial,
      testimonials,
      photos,
    } = this._mediaPage

    return (
      <Layout style="page--scroll" pageName={headline}>
        <div className="contain">
          <h1>{headline}</h1>
          <p>{description}</p>

          <VideoSection videos={videos} />

          <aside>
            <Testimonial {...featuredTestimonial} />
          </aside>

          <section>
            <h2>Photos</h2>
            <Carousel photos={photos} />
          </section>

          <section>
            <h2>Testimonials</h2>
            {testimonials.map((testimonial, i) => (
              <Testimonial key={i} {...testimonial} />
            ))}
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query MediaPageQuery {
    allContentfulMediaPage {
      edges {
        node {
          headline
          description {
            description
          }
          videos {
            videoTitle
            videoUrl
            videoProducer {
              videoProducer
            }
          }
          featuredTestimonial {
            quote {
              quote
            }
            name
            title
            organization
            headshot {
              description
              fluid(maxWidth: 660) {
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
          photos {
            photoTitle
            photo {
              description
              fluid(maxWidth: 1600) {
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
          testimonials {
            quote {
              quote
            }
            name
            title
            organization
            headshot {
              description
              fluid(maxWidth: 660) {
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`
export default MediaPage
