import React, { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import emailjs from '@emailjs/browser';
require('dotenv').config()

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});

const required = "This field is required";

export default () => {

  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const form = useRef();
  const onSubmit = async form => {
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_PUBLIC_KEY).then(response => {
        if (response.text == 'OK') {setSubmitted(true);reset();}
        else{setError("submit","Oops! There seems to be an issue!")}
      })
    };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm mt-5">
      <h3>Awesome! Your message was sent.</h3>
    </div>
  );

  const showForm = (
    <form ref={form} className='formcontact' onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>

      <label htmlFor="phone">
        <h5>Phone</h5>
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="0412 345 678"
          pattern="[0-9]{10}"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <div className="msg-error">{errors.phone.message}</div>
        )}
      </label>

      <label htmlFor="email">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>

      <label htmlFor="question">
        <h5>Message</h5>
        <textarea
          ref={register({ required })}
          name="message"
          id="message"
          rows="3"
          placeholder="Your message"
          disabled={isSubmitting}
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>

      <div className="submit-wrapper">
        <button type="submit" disabled={isSubmitting}>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );

  return (
    <ListContainer>
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/contact.jpg'})`, backgroundPosition: 'bottom'}}>
        <div className='mainbreadcumb'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Contact</h1>
              </div>
              <div className='col-md-6'>
                <div className='list'>
                  <Link className='link' to="/home">Home</Link>
                  <span className='dash'>/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>
      <Item className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <div className="form-side">
              <h2>Get in Touch</h2>
              <p>Leave us a message! We are a professional firm, Please no Marketing or SEO proposal's. They will be marked as junk.</p>
              {submitted ? showThankYou : showForm}
              {errors && errors.submit && showSubmitError(errors.submit.message)}
            </div>
          </div>

          <div className='col-md-6 pl-md-5'>
           <div className="text-side">
             <h2>Contact Information</h2>
              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  PO Box 200, Midland DC, Midland WA 6056
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:contac@azoria.au' target='_blank' rel='noopener noreferrer'>
                    contact@azoria.au
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  (+61) 08 9468 0029
                </div>
              </div>
           </div>
          </div>

        </div>
      </Item>

      <Testimony />
      <Footer />
    </ListContainer>
  );
};
