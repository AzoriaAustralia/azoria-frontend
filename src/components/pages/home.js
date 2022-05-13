import React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (
  <ListContainer>
    <Item className='jumbotron breadcumb' style={{ backgroundImage: `url(${'./img/imghome1.jpg'})` }}>
      <div className='homebread'>
        <div className='container-fluid'>
          <div className='row m-10-hor'>
            <div className='col-md-8 mr-auto '>
              <div className='heading'>
                Development, Hosting and Support
              </div>
              <div className='subheading'>
                Australian Owned & Operated
              </div>
              <div className='content'>
                The team at Azoria enjoy watching your project succeed, Initial designs, Development, Media creation, Hosting and IT Support.
              </div>
              <Link className="btn" to="/portfolio">
                  <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Item>

    <section className='container-fluid black_more'>
      <div className='row m-10-hor'>

        <div className='col-md-5'>
          <div className='subheading'>
            In Perth, Western Australia
          </div>
          <div className='heading'>
            Statewide Service <span className='br'></span>and Support 
          </div>
        </div>

        <div className='col-md-7'>
          <div className='content'>
            Along with the abovementioned service's, Azoria provides IT support, setup and administration statewide in Western Australia. 
          </div>
          <div className='content'>
            Contact us today with any services required to get your project & infrastructure up and running. From initial consultations to ongoing support.
          </div>
        </div>

      </div>
    </section>

    <section className='container-fluid pt-0 black_more'>
      <div className='row m-10-hor'>
        <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              01.
            </div>
            <div className='heading'>
              Website Design & Development
            </div>
            <div className='content'>
              Multiple website creation partners mean you get the result you want for your business. Check out our portfolio for examples of our work.
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              02.
            </div>
            <div className='heading'>
              Software & Program Development
            </div>
            <div className='content'>
            In the ever changing world of technology, Faster and more efficient ways to store and process data have become available. Looking to upgrade? Get a cutting edge on your competitors.
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              03.
            </div>
            <div className='heading'>
              App Development
            </div>
            <div className='content'>
            Web app's are becoming more and more popular by the day. Most of the websites you visit are specifically optimised for a streamlined user experience. 
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className='container-fluid p-0 black_more'>
      <div className='row m-10-hor'>

        <div className="col-md-6 pr-md-0">
          <img src="./img/blog.jpg" className="imgslickz" alt="#" />
        </div>

        <div className="col-md-6 centered p-md-5 pt-5">
          <div>
            <div className="heading">
              Media Creation
            </div>
            <p className="mt-3">
            Advertising & Media creation are available through Azoria, Utilising the amazing talent available right here in our backyard, You can be sure your business will stick out from the crowd.
            </p>
            <Link className='btn' to="">
              <span>More Detail</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 centered p-md-5 pt-5 pb-5">
          <div>
            <div className="heading">
              Development
            </div>
            <p className="mt-3">
              Azoria's Development services provide a quick turnaround of your desired project/web app. Not sure where to start? Check our FAQ's! (Pssst, That's our actual website >>)
            </p>
            <Link className='btn' to="">
              <span>Faq's</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 pl-md-0">
          <img src="./img/blog1.png" className="imgslickz" alt="#" />
        </div>

      </div>
    </section>

    <section className='container-fluid black_more'>
      <div className='row m-10-hor'>
        <div className='col-12 text-center'>
          {/* <div className='subheading'>Basic info our team</div> */}
          <div className='heading'>About Our Team</div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
                A family owned business consisting only of people who care about your success.
              </p>
            </div>
          </div>
        </div>
        <Carouselteam />
      </div>
    </section>

    <Bannercontact />
    <Testimony />
    <Footer />

  </ListContainer >
);
