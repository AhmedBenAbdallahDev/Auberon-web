'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/ConsultingAgency/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Keyboard],
  slidesPerView: 2,
  spaceBetween: 50,
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: '.tc-testimonials-style7 .swiper-next',
    prevEl: '.tc-testimonials-style7 .swiper-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 6000,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    787: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    }
  }
}

function Testimonials() {
  return (
    <section className="tc-testimonials-style7">
      <div className="container">
        <div className="title mb-80">
          <div className="row">
            <div className="col-lg-9">
              <div className="section-head-style7 js-splittext-lines">
                <span className="float-text sub_font"> Feedback </span>
                <h2 className="fsz-60"> Users Feedbacks </h2>
                <p className="fw-bold fsz-16 text-uppercase color-orange2"> testimonials </p>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <div className="arrows">
                <a href="#0" className="swiper-prev"> <i className="fal fa-long-arrow-left"></i> </a>
                <a href="#0" className="swiper-next"> <i className="fal fa-long-arrow-right"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content wow fadeInUp slow">
          <div className="tc-testimonials-slider7">
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <div className="row gx-0">
                      <div className="col-lg-4">
                        <div className="img-side">
                          <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="img img-cover overflow-hidden icon-125 rounded-circle mx-auto">
                            <img src={item.picture} alt="" />
                          </div>
                          <h6 className="fsz-20 mt-20"> {item.author} </h6>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="info">
                          <div className="logo th-40 mb-30">
                            <img src={item.logo} alt="" />
                          </div>
                          <div className="text fsz-20 sub_font">
                            {item.content}
                          </div>
                          <img src="/home_7/assets/img/icons/testi.png" alt="" className="float-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;