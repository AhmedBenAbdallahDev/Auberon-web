'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Static Data
import data from '@/data/ShopHome/services-slider.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function ServicesSlider() {
  return (
    <div className="tc-services-slider-style9 float_box_container">
      <div className="tc-services-slider9 overflow-hidden">
        <Swiper {...swiperOptions}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#" className="slide-link"> {item} </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="tc-services-slider9 float-slider overflow-hidden">
        <Swiper {...swiperOptions}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#" className="slide-link"> {item} </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="float_box"></div>
    </div>
  )
}

export default ServicesSlider;