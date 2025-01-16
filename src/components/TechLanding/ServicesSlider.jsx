'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 300,
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
    <div className="services-slider-text">
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          <a href="#"> Hire Us Now </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"> Get Aamzing Experience </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"> Hire Us Now </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"> Get Aamzing Experience </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ServicesSlider;