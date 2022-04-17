import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../../../images/about-bg (2).jpg'
import img from '../../../images/about.jpg';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';

const About = () => {
    return (
        <div>
            <NavTop/>
            <Navigation/>
            <div style={{ 
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            paddingTop: '120px',
            paddingBottom: '120px'
            
          }}>
            <div className='text-white text-center d-flex justify-content-center align-items-center'>
            <NavLink to="/home" className="nav-link fs-3 text-white">Home -</NavLink>
            <NavLink to="/about" className="nav-link fs-3 text-white">About Us</NavLink>

            </div>
        </div>
        <div className="container py-5">
        <div className="row">
            <div className="col-lg-6">
                <div className="about-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-content">
                    <h3 className='text-danger fw-bold'>Welcome to Hungry Vai</h3>
                    <h1 className='fs-1 fw-bold'>About Restaurant History!</h1>
                    <p className='fs-5 lh-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Lorem The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>
                    <button className='btn btn-lg btn-outline-danger fw-bold'>READ MORE</button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
        </div>
    );
};

export default About;