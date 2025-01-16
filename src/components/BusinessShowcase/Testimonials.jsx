'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/BusinessShowcase/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Pagination, Keyboard, Autoplay],
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".testimonials-slider6 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.testimonials-slider6 .swiper-button-next',
    prevEl: '.testimonials-slider6 .swiper-button-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 5000,
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
    <section className="tc-testimonials-style6">
      <div className="container">
        <div className="content">
          <div className="section-head text-center mb-80 js-splittext-lines">
            <h6 className="color-red1 fsz-14 text-uppercase mb-30 fw-bold"> <span className="icon me-2"> &gt; </span>  testimonials  <span className="icon ms-2"> &lt; </span> </h6>
            <h2 className="fsz-50 fw-600"> User Feedbacks </h2>
          </div>
          <div className="testimonials-slider6 wow fadeInUp slow">
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <div className="text fsz-22"> {item.content} </div>
                    <div className="btm-info">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="client-card d-flex align-items-center">
                            <div className="img icon-45 rounded-circle overflow-hidden img-cover me-3">
                              <img src={item.picture} alt="" />
                            </div>
                            <div className="inf">
                              <h6 className="fsz-16 fw-bold mb-1"> {item.author} </h6>
                              <p className="fsz-14 color-666"> {item.position} of <a href="#" className="color-red1"> {item.at} </a> </p>
                            </div>
                          </div>
                        </div>
                        {
                          item.video &&
                          <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                            <div className="button_su border-0">
                              <span className="su_button_circle bg-000 desplode-circle"></span>
                              <a href="#" className="butn text-capitalize border-0 button_su_inner bg-red1 py-3 px-5">
                                <span className="button_text_container text-white fsz-14"> Play Video <i className="ti-control-play ms-1"></i></span>
                              </a>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center">
              <div className="slider-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;