import React from 'react';
import bg from '../../../images/bg1.png'
import img from '../../../images/discount.webp'
import './Discount.css'

const Discount = () => {
    return (
        <div className='py-5'>
            <div style={{ 
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            paddingTop: '50px',
            paddingBottom: '50px'
            
          }}>
              <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="discount-text">
                            <h4>Promotional</h4>
                            <h3>Discount</h3>
                            <h2>UP TO 35%</h2>
                            <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form... or randomised words</p>
                            <button className='btn btn-lg btn-outline-secondary'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="discount-img">
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

            
        </div>
    );
};

export default Discount;