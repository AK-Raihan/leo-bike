import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cycle.css'

const Cycle = (props) => {
    const{_id, name, img, description, price}=props.cycle;
    return (
      <div className="col text-center">
      <div className=" h-100 product-card">
        <img src={img} className="img-fluid" alt="..."/>
        <div className="product-body">
          <h5 className="product-title fs-4 fw-bold">{name}</h5>
          <p className="product-text">{description}</p>
          <p className='price '>{price}</p>
        </div>
        <div className="product-body ">
              <NavLink to={`/booking/${_id}`}>
              <button className="btn me-4 order-btn fs-5"><i className="fas fa-cart-arrow-down"></i></button>
              </NavLink>
              <NavLink to={`/booking/${_id}`}>
              <button className="btn  order-btn fs-5"><i class="fas fa-solid fa-arrow-right"></i></button>
              </NavLink>
        </div>
        
      </div>
    </div>
    );
};

export default Cycle;