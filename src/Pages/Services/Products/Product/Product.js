import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const{_id, name, img, description, price}=props.product;
    return (
        <div className="col text-center">
    <div className="card h-100 product-card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 fw-bold">{name}</h5>
        <p className="card-text">{description}</p>
        <p className='price '>{price}</p>
      </div>
      <div className="card-body ">
            <NavLink to={`/booking/${_id}`}>
            <button className="btn me-2 order-btn">ORDER NOW</button>
            </NavLink>
            <NavLink to={`/details/${_id}`}>
            <button className="btn  order-btn">Details</button>
            </NavLink>
      </div>
      <div className="card-footer d-flex justify-content-evenly">
        raihan
      </div>
    </div>
  </div>
    );
};

export default Product;