import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../data/testimonials';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <section className='container-fluid  wraper-testimony'
        style={{ backgroundImage: `url(${'./img/testimony.jpg'})` }}>
        <div className='row m-10-hor'>
          <div className='testimony'>
            <Slider {...settings}>
              {testimonials.map((e) => {
                return (
                  <CustomSlide className='itm' key={e.key}>
                    <div className='blockquote'>
                      <div className="fa"></div>
                      <div className="conesti">
                        <p>
                          {e.text}
                        </p>
                        <div className="bytesti">
                          {e.name}
                        </div>
                      </div>
                    </div>
                  </CustomSlide>
                )
              })}


            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
