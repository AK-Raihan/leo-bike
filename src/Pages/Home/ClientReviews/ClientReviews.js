import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import Slider from "react-slick";
import './ClientReviews.css'
import ReviewCard from './ReviewCard/ReviewCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ClientReviews = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://intense-headland-61150.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="nextArrow" {...props} />
    );

    const settings = {
        autoplay: true,
    autoplaySpeed: 3000,
    slide: 'div',
    cssEase: 'linear',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="client-reviews py-5" id="reviews">
            <div className="container text-center">
                <h2 className='fw-bolder'>Visitors <span className='text-danger'>Feedback</span></h2>
                {loading && <Spinner animation="border" variant="danger" /> }
                <Slider {...settings}>
                    {

                        reviews.map((item) =>
                            <ReviewCard
                                key={item._id}
                                item={item}
                            ></ReviewCard>
                        )}
                </Slider>
                <Toaster/>
            </div>
        </div>

    );
};

export default ClientReviews;