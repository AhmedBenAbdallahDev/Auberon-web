"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/ShopHome/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Keyboard],
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: '.tc-testimonials-style9 .arrow-next',
    prevEl: '.tc-testimonials-style9 .arrow-prev',
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
      slidesPerView: 3,
    }
  }
}

function Testimonials() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <section className="tc-testimonials-style9">
      <div className="container">
        <div className="section-head-style9 mb-80">
          <h3 className="fsz-40"> User Feedbacks </h3>
          <span className="line"></span>
          <div className="arrows">
            <a href="#0" className="arrow-prev"> <i className="fal fa-long-arrow-left me-2"></i> <span> Prev </span> </a>
            <a href="#0" className="arrow-next"> Next <i className="fal fa-long-arrow-right ms-2"></i> <span> </span> </a>
          </div>
        </div>
        <div className="tc-testimonials-slider9 overflow-hidden wow fadeInUp slow">
          <Swiper {...swiperOptions}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testi-card">
                  <div className="logo">
                    <img src={isDark ? item.logo_dark : item.logo_light} alt="" />
                  </div>
                  <div className="text fsz-20">
                    {item.content}
                  </div>
                  <div className="client-card d-flex align-items-center mt-40">
                    <div className="img icon-50 rounded-circle overflow-hidden img-cover me-3">
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="inf">
                      <h6 className="fsz-24 fw-500 mb-1"> {item.name} </h6>
                      <p className="fsz-14 color-666"> {item.position} of <a href="#" className="color-red1"> {item.at} </a> </p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;