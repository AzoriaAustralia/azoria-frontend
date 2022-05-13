import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='slickteam'>
        <Slider {...settings}>

          <CustomSlide className='itm' index={1}>
            <div className='bg'>
              <img
                src="./img/team/josh.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>Joshua Wallace</div>
              <div className='title'>CEO/Founder</div>
            </div>
            <div className='icon'>
              <span onClick={()=> window.open("https://www.linkedin.com/in/joshuajwallacee/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={()=> window.open("https://azoria.au/", "_blank")}>
                <i className="fa fa-internet-explorer" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>
          <CustomSlide className='itm' index={2}>
            <div className='bg'>
              <img
                src="./img/team/jrad.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>Jarryd Lang</div>
              <div className='title'>Media Production Partner, Founder of JKL Media</div>
            </div>
            <div className='icon'>
              <span onClick={()=> window.open("https://www.linkedin.com/in/jarryd-lang-2b4618205/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={()=> window.open("https://jklmedia.com.au/", "_blank")}>
                <i className="fa fa-internet-explorer" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={3}>
            <div className='bg'>
              <img
                src="./img/team/stell.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>Stellio Koutsis</div>
              <div className='title'>Graaphics Design Partner, Founder of Stellio Graphics Design</div>
            </div>
            <div className='icon'>
              <span onClick={()=> window.open("https://www.linkedin.com/company/work-with-stellio/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={()=> window.open("https://stellio.com.au/", "_blank")}>
                <i className="fa fa-internet-explorer" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
