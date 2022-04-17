import React from 'react';
import './NavTop.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import ProfilePopper from '../../ProfilePropper/ProfilePropper';

const NavTop = () => {
    const {user}= useAuth();
    return (
        <div className='navtop-main'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center py-3'>
                    <Col lg={4} md={12}>
                    <div className='top-contact '>
                            <span className='me-2 fs-5'> <a className='text-decoration-none text-dark ' href="tel:+1514312-5478"><i className="fas fa-phone-volume"></i> +1 (514) 312-5478</a></span>
                            <span className='fs-5'> <a className='text-decoration-none text-dark ' href="/"><i className="fas fa-xms"></i> Live Chat</a> </span>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                    <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </div>
                    
                    </Col>
                    
                    <Col lg={4} md={12}>
                    <div className="login d-flex justify-content-center align-items-center">
                    <span className='fs-3  me-3 cart-icon'><i className="fas fa-cart-arrow-down"></i></span>
                        
                        {
                            user?.email ? <div className=" d-flex justify-content-center align-items-center w-100">

                                
                            <NavLink to="/dashboard"><button className='btn btn-lg '>Dashboard</button></NavLink>
                            <ProfilePopper/>
                          </div>
                          :
                        <NavLink to="login">
                        <span className='fs-4 text-dark'><i class=" fas fa-solid fa-user-plus"></i></span>
                        </NavLink>
                        }
                        

                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavTop;