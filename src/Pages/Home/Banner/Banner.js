import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider1 from '../../../images/background (2).jpg'
import slider2 from '../../../images/backgraound.jpeg'
import slider3 from '../../../images/background (3).jpg'
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
              <div style={{ 
            backgroundImage: `url("${slider1}")`,
            maxWidth: '100%',
            height: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            paddingTop: "350px",
            paddingBottom: "350px",
            
          }}>
            <div className="banner-text">
            <h6>For A Better Ride</h6>
            <h2>Find Your <span className="text-info">Mountain</span> Bike</h2>
            <NavLink to="/products">
            <button className="btn btn-lg btn-outline-info text-white">SHOP NOW</button>
            </NavLink>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ 
            backgroundImage: `url("${slider2}")`,
            maxWidth: '100%',
            height: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            paddingTop: "350px",
            paddingBottom: "350px"
          }}>
            <div className="banner-text">
            <h6>For A Better Ride</h6>
            <h2>Best <span className="text-info">Cycing</span> Experience  </h2>
            <NavLink to="/products">
            <button className="btn btn-lg btn-outline-info text-white">SHOP NOW</button>
            </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ 
            backgroundImage: `url("${slider3}")`,
            maxWidth: '100%',
            height: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: 'cover',
            paddingTop: "350px",
            paddingBottom: "350px"
          }}>
            <div className="banner-text">
            <h6>For A Better Ride</h6>
            <h2>Find Your <span className="text-info">Mountain</span> Bike</h2>
            <NavLink to="/products">
            <button className="btn btn-lg btn-outline-info text-white">SHOP NOW</button>
            </NavLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
