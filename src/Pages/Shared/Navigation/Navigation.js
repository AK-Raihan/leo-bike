import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.jpg'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='nav-main '>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container nav-content">
                <a class="navbar-brand" href="/">
                    <img className='img-fluid' src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Hosting</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Domain</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Pages</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-6 fw-bold nav-menu">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;