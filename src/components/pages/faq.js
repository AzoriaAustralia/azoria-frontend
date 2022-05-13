import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Bannerportfolio from '../components/bannerportfolio';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import questions from '../components/faq';

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
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/faq.jpg'})`, backgroundPosition: 'center'}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>FAQ</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>

  <Item className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12'>
        <div className='AppContainer'>
          {questions.map((e) => {
            return (
              <div className="quesion box">
                <ul>
                  <li><b>{e.question}</b></li>
                  <li>{e.answer}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    
    </div>
  </Item>

  <Bannerportfolio/>
  <Testimony />
  <Footer />
</ListContainer>

);
