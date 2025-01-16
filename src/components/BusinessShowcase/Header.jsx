'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Components
import Navbar from './Navbar';
//= Static Data
import data from '@/data/BusinessShowcase/header.json';

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

function Header() {
  return (
    <header className="tc-header-style6">
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img wow fadeInUp slow">
                <img src="/home_6/assets/img/header.jpg" alt="" className="main-img" />
                <img src="/home_6/assets/img/symbol_wh.png" alt="" className="float-img" data-speed="1" data-lag="0.7" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
                <h1 className=""> Effective <br /> Business Strategy </h1>
                <a href="#" className="butn_arrow_circle mt-50 hover-white hover-bg-red1">
                  Our Solutions <span className="arrow"> <i className="far fa-long-arrow-right"></i> </span>
                </a>
              </div>
            </div>
          </div>
          <div className="tc-awards-slider6">
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide className="btn_wrapper" key={item.id}>
                  <a href="#" className="award-card btn-item">
                    <p className="text-uppercase"> {item.title} </p>
                    <div className="btm-inf">
                      <p> {item.year} </p>
                      <img src={item.logo} alt="" className="logo" />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header
