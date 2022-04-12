import React from 'react';
import './Contact.css'


const Contact = () => {
  
    return (
        <div className='py-5'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info">

                        <div className="contac-box" >
                        <span><i className="fas fa-phone-volume"></i></span>
                        <h2>Phone</h2>
                        <p>+88 01756104126</p>

                        <div className="contac-box" >
                        <span><i className="fas fa-envelope"></i></span>
                        <h2>Email</h2>
                        <p>mkraihan207@gmail.com</p>
                        </div>

                        <div className="contac-box " >
                        <span><i className="fas fa-map-marker-alt"></i></span>
                        <h2>Address</h2>
                        <p>Mymensingh, Bangladesh</p>
                        </div>

                    </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="contact-form text-white " >
                        <h1>Get in touch now</h1>
                        <form  >
                            <div className="my-3">
                                <input type="text" className="form-control input" name="name" required placeholder="name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control input" name="user_email" required  placeholder="e-mail"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control textarea" name="message"  placeholder="type your message here" rows="3"></textarea>
                            </div>
                            <input className="btn btn-info w-100 mb-3" type="submit" value="Send" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;