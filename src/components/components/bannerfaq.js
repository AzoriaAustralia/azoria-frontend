import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <img src='./img/faqbanner.jpg' loading="lazy" alt='imgbanner' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              
              <div className="heading">
                Not sure where to start?
              </div>
              <p>
                Our frequently asked question section
                <span className='br'></span>has some information for you!
              </p>
              <Link className='btn' to="/faq">
                <span>FAQ</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
