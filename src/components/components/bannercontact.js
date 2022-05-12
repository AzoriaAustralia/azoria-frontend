import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <img src='./img/mocks.png' alt='imgbanner' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading">
                You can trust us
              </div>
              <div className="heading">
                "The proof is in the pudding"
              </div>
              <p>
                See some of our recent works in our Portfolio,
                <span className='br'></span>From Cryptocurrency Web Apps,
                <span className='br'></span>to websites for Retailers and Small Businesses
              </p>
              <Link className='btn' to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
