import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../images/login-bg.jpg'


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, signInUsingGoogle, loginUser, authError, isLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = ()=>{
        signInUsingGoogle(location, navigate)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
    }
    return (
        <div style={{marginBottom:'100px'}}>

            <div style={{ 
                backgroundImage: `url("${bg}")` ,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                paddingTop: '50px',
                paddingBottom: '50px'
                }}>
                <div className='text-center text-white'>
                <h1 >Account</h1>
                <NavLink className='text-white text-decoration-none fw-bold' to="/">Home</NavLink> /
                <span className='text-white text-decoration-none fw-bold' >Account</span>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-5 text-center">
                    <h3>Login form</h3>
                        <button onClick={handleGoogle} className='btn btn-outline-info rounded-pill mb-2 w-100'>Continue With Google</button>
                        <h6>Bellow The Olternative Way</h6>
                        <form onSubmit={handleLoginSubmit}>
                            <input onBlur={handleOnBlur} name="email" className='form-control my-3 rounded-pill' type="email" placeholder='Email' />
                            <input onBlur={handleOnBlur} name="password" className='form-control my-3 rounded-pill' type="password" placeholder='Password' />
                            <input className='btn btn-dark w-100 btn-outline-secondary text-white rounded-pill' type="submit" value="Login" />
                            <NavLink
                            to="/register" className="text-decoration-none fw-bold">
                            <p className=' mt-3 '>New User? Please Create Account</p>
                        </NavLink>

                        {isLoading && <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>}
                        {authError && <alert alert >{authError}</alert>}
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;