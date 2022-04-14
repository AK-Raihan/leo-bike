import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './MainDashboard.css';




const MainDashboard = () => {

 
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="main-dashboard">
            <div className="dash-container">
                <div className={isActive ? "navigation active" : "navigation"}>
                    <ul>
                        <li>
                            <Link to="">
                                
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                         <> 
                        <li>
                            <Link to={`/dashboard/myOrders`}>
                                
                                <span className="title">My Orders</span>
                            </Link>
                        </li>
                            <li>
                                <Link to={`/dashboard/review`}>
                                    
                                    <span className="title">Add a Review</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/payment`}>
                                    
                                    <span className="title">Payment</span>
                                </Link>
                            </li>
                        </>
                         <>
                            <li>
                                <Link to={`/dashboard/manageProducts`}>
                                   
                                    <span className="title">Add a Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/makeAdmin`}>
                                    
                                    <span className="title">Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/manageOrders`}>
                                    
                                    <span className="title">Manage All Orders</span>
                                </Link>
                            </li>
                        
                        </>
                        <li>
                            <Link to="">
                                
                                <span className="title">Back to Home</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* main part  */}
                <div className={isActive ? "main active" : "main"}>
                    <div className="topbar">
                        <div className="toggle" onClick={handleToggle}>
                        <span className='fs-3'><i class="fas fa-solid fa-toggle-off"></i></span>
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                
                            </label>
                        </div>
                        <div className="user">
                            <p>ProfilePopper</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="cardBox">
                        <>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">1,504</div>
                                <div className="cardName">Daily Views</div>
                            </div>
                            <div className="iconBx">
                                
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Sales</div>
                            </div>
                            <div className="iconBx">
                                
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">284</div>
                                <div className="cardName">Comments</div>
                            </div>
                            <div className="iconBx">
                                
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">$7,842</div>
                                <div className="cardName">Earning</div>
                            </div>
                            <div className="iconBx">
                                
                            </div>
                        </div>
                        </>
                    </div>

                    {/* ADD CHARTS  */}
                    

                    {/* DETAILS  */}
                    <div className="details">
                        {/*order details list  */}
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <Outlet/>
                            </div>
                        </div>
                        {/* NEW CUSTOMER  */}
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Recent Customers</h2>
                            </div>
                            <table>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;