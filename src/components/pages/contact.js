import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from '@reach/router';
import posed from 'react-pose';
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

export default () => {

  // const [submitted, setSubmitted] = useState(false);
  
  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   errors,
  //   reset,
  //   formState: { isSubmitting }
  // } = useForm();


  // // 3858ee921a148f0bba869613c4d8b76f:34ddf57b379599fee17244475088f4ed


  // const onSubmit = async data => {
  //   try {
  //     const request = mailjet
  //     .post("send", {'version': 'v3.1'})
  //     .request({
  //       "Messages":[
  //         {
  //           "From": {
  //             "Email": "joshua@azoria.au",
  //             "Name": "Joshua"
  //           },
  //           "To": [
  //             {
  //               "Email": "joshua@azoria.au",
  //               "Name": "Joshua"
  //             }
  //           ],
  //           "Subject": "Greetings from Mailjet.",
  //           "TextPart": JSON.stringify(data),
  //           "CustomID": "AppGettingStartedTest"
  //         }
  //       ]
  //     })
  //     request
  //       .then((result) => {
  //         console.log(result.body)
  //       })
  //     setSubmitted(true);
  //     reset();
  //   } catch (error) {
  //     setError(
  //       "submit",
  //       "submitError",
  //       `Oops! There seems to be an issue! ${error.message}`
        
  //     );
  //     console.log(error.statusCode);
  //   }
  // };

  // const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  // const showThankYou = (
  //   <div className="msg-confirm mt-5">
  //     <h3>Awesome! Your message was sent.</h3>
  //   </div>
  // );

  // const showForm = (
  //   <form className='formcontact' onSubmit={handleSubmit(onSubmit)} method="post">
  //     <label htmlFor="name">
  //       <h5>Name</h5>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         placeholder="Your name"
  //         ref={register({ required })}
  //         disabled={isSubmitting}
  //       />
  //       {errors.name && <div className="msg-error">{errors.name.message}</div>}
  //     </label>

  //     <label htmlFor="email">
  //       <h5>Email</h5>
  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         placeholder="your@email.address"
  //         ref={register({ required })}
  //         disabled={isSubmitting}
  //       />
  //       {errors.email && (
  //         <div className="msg-error">{errors.email.message}</div>
  //       )}
  //     </label>

  //     <label htmlFor="question">
  //       <h5>Message</h5>
  //       <textarea
  //         ref={register({ required })}
  //         name="question"
  //         id="question"
  //         rows="3"
  //         placeholder="Your message"
  //         disabled={isSubmitting}
  //       />
  //       {errors.question && (
  //         <div className="msg-error">{errors.question.message}</div>
  //       )}
  //     </label>

  //     <div className="submit-wrapper">
  //       <button type="submit" disabled={isSubmitting}>
  //         <span>Submit</span>
  //       </button>
  //     </div>
  //   </form>
  // );

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
              <h2>Form Currently Disabled</h2>
              {/* {submitted ? showThankYou : showForm}
              {errors && errors.submit && showSubmitError(errors.submit.message)} */}
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
