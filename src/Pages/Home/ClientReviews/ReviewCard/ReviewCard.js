
import React from 'react';
import Rating from 'react-rating';

import './ReviewCard.css';
import useAuth from './../../../../hooks/useAuth';

const ReviewCard = ({ item }) => {
    const {user}=useAuth()
    return (
        <div className="py-5">
            <div className="box">
                <div className="imgBox">
                    <img src="" alt="" />
                </div>
                <p>{item.comment}</p>
                <Rating
                    emptySymbol="far fa-star star-color"
                    fullSymbol="fas fa-star star-color"
                    initialRating={item.rating}
                    readonly>RAte</Rating>
                <h4>{item.name} <br /> <span>{item.address || 'Dhaka, Bangladesh'}</span></h4>
            </div>
        </div>
    );
};

export default ReviewCard;