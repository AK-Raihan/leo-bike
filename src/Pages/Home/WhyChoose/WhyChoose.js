import React from 'react';
import item1 from '../../../images/fast-delivery.png'
import item2 from '../../../images/genuine.png'
import item3 from '../../../images/customer-service.png'
import item4 from '../../../images/return.png'
import './WhyChoose.css'

const WhyChoose = () => {
    return (
        <div>
            <div className="choose-main py-5">
                <div className="container">
                    <div className="choose-title text-center">
                        <h2 className='mb-5'>Why choose us</h2>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="choose-item text-center p-3 mt-3">
                                    <img className='mb-4' src={item1} alt="" />
                                    <h3>Fast Delivery</h3>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="choose-item text-center p-3 mt-3">
                                    <img className='mb-4' src={item2} alt="" />
                                    <h3>Fast Delivery</h3>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="choose-item text-center p-3 mt-3">
                                    <img className='mb-4' src={item3} alt="" />
                                    <h3>Fast Delivery</h3>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="choose-item text-center p-3 mt-3">
                                    <img className='mb-4' src={item4} alt="" />
                                    <h3>Fast Delivery</h3>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;