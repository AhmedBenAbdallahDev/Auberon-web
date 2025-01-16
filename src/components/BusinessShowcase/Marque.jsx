'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 100,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 15000,
  navigation: false,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function Marque() {
  return (
    <section>
      <div className="tc-marqee-slider6">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div className="item">
              <a href="#" className="sub_font"> Creative Services </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <a href="#" className="sub_font"> Get Free Quote </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <a href="#" className="sub_font"> Make Appointment </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <a href="#" className="sub_font"> Creative Services </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Marque;