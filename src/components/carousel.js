import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slider: null,
      // thumbs: null,
    }

    this._carouselSettings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      useTransform: false,
    }

    // this._carouselThumbSettings = {
    //   slidesToShow: 4,
    //   swipeToSlide: true,
    //   focusOnSelect: true,
    // }

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
      slider: this.slider,
      // thumbs: this.thumbs
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

        {/* <Slider
          {...this._carouselThumbSettings}
          asNavFor={this.state.slider}
          ref={slider => (this.thumbs = slider)}
          className="carousel-thumbs"
        >
          {this._carouselSlides}
        </Slider> */}
      </div>
    )
  }
}
