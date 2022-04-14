import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {  useParams } from 'react-router';
import {  useNavigate } from 'react-router-dom';
import './Booking.css';
import useAuth from '../../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

// import MenuBar from '../../shared/MenuBar/MenuBar';


const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [specificDetail, setSpecificDetail] = useState({});
 
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/singleCycle/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificDetail(data))
    }, [])

    console.log(specificDetail)

    const onSubmit = data => {
        data.carId = id;
        data.status = "pending";
        data.orderTime = new Date().toLocaleDateString('en-GB');
        axios.post('http://localhost:5000/confirmOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Booking Succesful')
                    reset();
                    navigate('/')
                }
            })
    }
    return (
        <div className="cycle-booking py-5">
            
            <Container className="py-5">
                <h2 className="text-center py-2">Booking Confirmation</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col md={3} xs={12} className="pr-md-4">
                            </Col>
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" 
                                type="text" 
                                {...register("product", 
                                { required: true })} 
                                defaultValue={specificDetail.name} />

                                <label>Name</label>
                                <input
                                    className="our-form-input"
                                    type="text"
                                    defaultValue={user.displayName}
                                    {...register("user", { required: true })}
                                    placeholder="Your Name"
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="our-form-input"
                                    defaultValue={user.email}
                                    {...register("email", { required: true })}
                                    placeholder="Your Email"
                                />
                                <label>Your Phone Number</label>
                                <input
                                    type="number"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("phone", { required: true })}
                                    placeholder="Phone Number"
                                />
                                <label>Test Drive Date</label>
                                <input
                                    type="date"
                                    date="{{date}}" timezone="[[timezone]]"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("date", { required: true })}
                                    placeholder="Test Drive Date"
                                />
                                <textarea
                                    type="textarea"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("address", { required: true })}
                                    placeholder="Address"
                                />
                                 <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                            <Col md={3} xs={12} className="pr-md-4">
                            </Col>

                        </Row>
                    </div>

                    <div className="text-center mt-4">
                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                            Confirm Booking
                        </Button>
                    </div>
                </form>
                <Toaster/>

            </Container>
        </div>
    );
};

export default Booking;