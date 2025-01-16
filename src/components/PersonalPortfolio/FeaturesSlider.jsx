'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Static Data
import data from '@/data/PersonalPortfolio/features-slider.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 60,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function FeaturesSlider() {
  return (
    <div className="tc-features-slider-style8 overflow-hidden">
      <div className="tc-features-slider8">
        <Swiper {...swiperOptions}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#" className="slide-link sub_font_2"> {item} <img src="/home_8/assets/img/star.png" alt="" className="star ms-30" /> </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="tc-features-slider8" dir="rtl">
        <Swiper {...swiperOptions}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#" className="slide-link sub_font_2"> {item} <img src="/home_8/assets/img/star.png" alt="" className="star ms-30" /> </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturesSlider;