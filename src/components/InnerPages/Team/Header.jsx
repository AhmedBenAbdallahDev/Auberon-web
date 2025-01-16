"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Components
import Navbar from '../Common/Navbar';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 300,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 30000,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function Header() {
  return (
    <header className="tc-team-header-style1">
      <Navbar />
      <div className="header-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> Stunning Team </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Ready To Serve Quality Service </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Stunning Team </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Ready To Serve Quality Service </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  )
}

export default Header