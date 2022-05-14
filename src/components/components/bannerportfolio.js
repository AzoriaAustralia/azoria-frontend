import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
          
            <img src='./img/portfoliobanner.jpg' loading="lazy" alt='imgbanner' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading">
                You can trust us
              </div>
              <div className="heading">
                Just check our work.
              </div>
              <p>
                See some of our works in the Portfolio.<br/>Cryptocurrency dApps, Solidity Contracts,<br/> Retailer Websites and Server Setups.
              </p>
              <Link className='btn' to="/portfolio">
                <span>Portfolio</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
