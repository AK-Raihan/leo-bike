import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider1 from '../../../images/background (2).jpg'
import slider2 from '../../../images/backgraound.jpeg'
import slider3 from '../../../images/background (3).jpg'

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
            paddingBottom: "350px"
          }}>
            <h2>bg1</h2>
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
            <h2>bg2</h2>
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
            <h2>bg3</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
