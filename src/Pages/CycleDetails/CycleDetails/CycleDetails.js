import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { useNavigate} from 'react-router-dom';

import './CycleDetails.css';

const CycleDetals = () => {
    const { id } = useParams();
    const [specificCar, setSpecificCar] = useState({});
    const { name, price, img, _id, rating} = specificCar;


    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://intense-headland-61150.herokuapp.com/singleCycle/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificCar(data))
    }, [])

    const handleCarBooking = (id) => {
        const uri = `/booking/${id}`
        navigate(uri)
    }
    return (
        <div className="car-details py-5">

            <Container className="py-5">
                {/* <h2 className="text-center pb-4">Car Details Here</h2> */}
                <Row className="car-details py-3">
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-img-box">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-content-box d-flex">
                            <div className="car-flex">
                                <h2>{name}</h2>
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={rating}
                                    readonly>RAte</Rating>
                                <div className="car-price py-2">
                                    
                                    <span>{price}</span>
                                    <h6>*Ex-showroom Price in Dhaka</h6>
                                    <h6>EMI Starts usd.13,114 /Month</h6>
                                </div>
                            </div>
                            <div className="offer-icon py-5">
                                <Button onClick={() => handleCarBooking(_id)} variant="warning">Book Your Car</Button>
                                <div className="tagIcon py-2">
                                    <span>Don't miss out on the best offers for this month</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>

        </div>
    );
};

export default CycleDetals;