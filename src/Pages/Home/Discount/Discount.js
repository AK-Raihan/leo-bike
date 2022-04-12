import React from 'react';
import bg from '../../../images/bg1.png'
import img from '../../../images/discount.webp'

const Discount = () => {
    return (
        <div>
            <div style={{ 
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
        
            
          }}>
              <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="discount-text">
                            <h4>Promotional</h4>
                            <h3>Discount</h3>
                            <h2>UP TO 35%</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form... or randomised words</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="discount-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

            
        </div>
    );
};

export default Discount;