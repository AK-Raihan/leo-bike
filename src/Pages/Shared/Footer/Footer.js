import React from 'react';
import logo from '../../../images/logo.jpg'
import bg from '../../../images/footer-bg.jpg'
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <div style={{ 
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            paddingTop: '50px',
            paddingBottom: '50px'
            
          }}>
              <ScrollToTop smooth top="1000" />
            <div className=' pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a className="navbar-brand" href="/">
                                <div className="logo">
                                    <img className='img-fluid' src={logo} alt="" />
                                </div>
                        </a>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                        <div className="social-menu footer-menu d-flex list-unstyled justify-content-start ">                  
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                    <h2>Keep In Touch</h2>
                        <p>Our Shop is the perfect shopping store for your bike.</p>
                        <ul className=" list-unstyled">
                            <li className=""><i className="fas fa-map-marker-alt "></i> BHA gate oposite position,22</li>
                            <li ><i className="fas fa-phone-volume my-4"></i> +24 123-456-7878</li>
                            <li ><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2>Overview</h2>
                        <ul>
                            <li className='mt-2'>Home</li>
                            <li className='mt-2'>About Us</li>
                            <li className='mt-2'>Products</li>
                            <li className='mt-2'>Blog</li>
                            <li className='mt-2'>Contact</li>
                            <li className='mt-2'>Account</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2>Newsletter</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        <input className='form-control my-4' placeholder='Email here...' type="text" />
                        <button className='btn btn-lg btn-outline-info'>Subscribe</button>
                        
                    </div>
                    
                    
                </div>
                <div className="footer-bootom text-center py-3">
                  <p >© 2022 Leo Bike – All Rights Reserved</p>
                </div>
            </div>
        </div>
          </div>

        
    );
};

export default Footer;