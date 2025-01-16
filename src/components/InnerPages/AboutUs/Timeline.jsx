'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/InnerPages/AboutUs/timeline.json';

const swiperOptions = {
  modules: [Navigation, Keyboard],
  slidesPerView: 2,
  spaceBetween: 50,
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: '.tc-about-timeline-style1 .button-next',
    prevEl: '.tc-about-timeline-style1 .button-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: false,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    787: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }
  }
}

function Timeline() {
  return (
    <section className="tc-about-timeline-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info">
              <h2 className="year js-title"> 2000 </h2>
              <h3> Swak journey was started from here </h3>
            </div>
            <div className="arrows">
              <a href="#0" className="button-prev"> <i className="fal fa-long-arrow-left"></i> </a>
              <a href="#0" className="button-next"> <i className="fal fa-long-arrow-right"></i> </a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="titmeline-slider">
              <Swiper {...swiperOptions}>
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="img-card">
                      <img src={item} alt="" className="main-img" />
                      <span className="award-icon">
                        <img src="/inner_pages/assets/img/about/award_icon.png" alt="" />
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline;