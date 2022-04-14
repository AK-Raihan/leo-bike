import React from 'react';
import './NavTop.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const NavTop = () => {
    const {user, logout}= useAuth();
    return (
        <div className='navtop-main'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center py-3'>
                    <Col lg={4} md={12}>
                    <div className='top-contact '>
                            <span className='me-2 fs-5'> <a className='text-decoration-none text-white' href="tel:+1514312-5478"><i className="fas fa-phone-volume"></i> +1 (514) 312-5478</a></span>
                            <span className='fs-5'> <a className='text-decoration-none text-white ' href="/"><i className="fas fa-xms"></i> Live Chat</a> </span>
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
                        
                        {
                            user?.email ? <div className=" d-flex justify-content-center align-items-center w-100">

                            <span className='text-white'>Hello <span className="fw-bold text-info">{user.displayName}</span> </span>
                            <div className=""><img className="rounded-circle user-pic" src={user?.photoURL} alt="" /></div>    
                            <NavLink to="/dashboard"><button className='btn btn-lg text-white'>Dashboard</button></NavLink>
                            <span className='fs-3 text-white me-3'><i className="fas fa-cart-arrow-down"></i></span>
                            <button onClick={logout}>logout</button>
                          </div>
                          :
                          
                        <NavLink to="login">
                        <span className='fs-3 text-white'><i class=" fas fa-solid fa-user-plus"></i></span>
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