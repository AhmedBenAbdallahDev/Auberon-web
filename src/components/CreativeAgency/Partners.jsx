'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Static Data
import data from '@/data/CreativeAgency/partners.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 50,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
    },
    787: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    }
  }
}

function Partners() {
  return (
    <div className="tc-partners-style5">
      <div className="container">
        <div className="logos-slider5">
          <Swiper {...swiperOptions}>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <a href="#0" className="logo">
                  <img src={item} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Partners;