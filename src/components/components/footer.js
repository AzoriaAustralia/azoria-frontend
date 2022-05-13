import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>About Us</h2>
          </div>
          <div className='content'>
            <p>Azoria was founded originally in 2021, In Q2 of 2022 Joshua quit his fulltime job and started running the business with his wife.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Sitemap
          </div>
          <div className='content'>
            <div className='link'><a style={{color: 'white'}} href="/">Home</a></div>
            <div className='link'><a style={{color: 'white'}} href="/faq">FAQ</a></div>
            <div className='link'><a style={{color: 'white'}} href="/portfolio">Portfolio</a></div>
            <div className='link'><a style={{color: 'white'}} href="/contact">Contact</a></div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>See what Azoria is up to.</p>
            <div className='socialicon'>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
              <i className="fa fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyright 2022 <span className='font-weight-bold'>Azoria</span> All rights reserved.</div>
        </div>
        <div className='col-md-6'>
          <div className='content text-right'>All media contained in this website is licenced</div>
        </div>
      </div>
    </div>
  </footer>
);
