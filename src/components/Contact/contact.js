
// import React from 'react';
// import './contact.css'

// export default function Contact() {
//     return (
//         <div className="rts-contact-form-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="rts-contact-fluid rts-section-gap">
//                                 <div className="rts-title-area contact-fluid text-center mb--50">
//                                     <p className="pre-title">Get In Touch</p>
//                                     <h2 className="title">Needs Help? Let’s Get in Touch</h2>
//                                 </div>
//                                 <div className="form-wrapper">
//                                     <div id="form-messages" />
//                                     <form id="contact-form">
//                                         <div className="name-email">
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 placeholder="Your Name"
//                                                 required=""
//                                             />
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 placeholder="Email Address"
//                                                 required=""
//                                             />
//                                         </div>
//                                         <input type="text" name="subject" placeholder="Your Subject" />
//                                         <textarea
//                                             placeholder="Type Your Message"
//                                             name="message"
//                                             defaultValue={""}
//                                         />
//                                         <button type="submit" className="rts-btn btn-primary">
//                                             Send Message
//                                         </button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

// import React from 'react';
// import './contact'

// export default function Contact() {
//     return (
//         <div name="container">
//             <div className='contact'>
//                 <h1>Send me a Message</h1>
//                 <p>Your email address will not be published. All fields are required</p>
//                 <div className='row'>
//                     <div className='col col-lg-6 col-md-6 col-xs-12'>
//                         <input />
//                     </div>
//                     <div className='col col-lg-6 col-md-6 col-xs-12'>
//                     <input />
//                     </div>
//                     <div className='col col-lg-12 col-md-12 col-xs-12'>

//                     </div>
//                 </div>
//             </div>
//         </div>
//             )}

import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <section className="tp-contact-form-area section-padding">
                <div className="container">
                    <div className="tp-contact-form-wrap">
                        <div className="tp-section-title">
                            <h2>Send me a Message</h2>
                            <p>Your email address will not be published. All fields are required</p>
                        </div>

                        <form method="post" className="contact-validation-active">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Name*</label>
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" value="" />
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Email*</label>
                                        <input type="email" name="email" className="form-control" placeholder="Your Email" value="" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-lg-12 col-md-12 col-xs-12">
                                    <div className="fullwidth form-group">
                                        <label>Message*</label>
                                        <textarea type="text" name="message" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5  col-12">
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">Submit now</button>
                                        <div id="loader">
                                            <i className="ti-reload"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7  col-12">
                                    <div className="contact-info">
                                        <ul>
                                            <li><i className="fi flaticon-phone-call"></i> +1238575694</li>
                                            <li><i className="fi flaticon-mail"></i> example@mail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="visible-rotate-text">
                    <h1>Contat Me</h1>
                </div>
            </section>
        </div>
    )
}


