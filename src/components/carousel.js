import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slider: null
    }

    this._carouselSettings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      useTransform: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    }

    this._carouselSlides = props.photos.map((slide, i) => (
      <div key={i} className="carousel__slide">
        <img
          srcSet={slide.photo.srcSet}
          src={slide.photo.src}
          sizes={slide.photo.sizes}
          alt={slide.alt}
        />
      </div>
    ))
  }

  componentDidMount() {
    this.setState({
      slider: this.slider
    })
  }

  render() {
    const { photos } = this.props

    if (!photos) {
      return null
    }

    return (
      <div className="carousel-wrap">
        <Slider
          {...this._carouselSettings}
          ref={slider => (this.slider = slider)}
          className="carousel"
        >
          {this._carouselSlides}
        </Slider>
      </div>
    )
  }
}
