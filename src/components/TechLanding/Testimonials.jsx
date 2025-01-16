"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/TechLanding/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, EffectFade, Keyboard],
  slidesPerView: 1,
  spaceBetween: 50,
  effect: 'fade',
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: '.tc-testimonials-slider10 .button-next',
    prevEl: '.tc-testimonials-slider10 .button-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 5000,
  },
  loop: false
}

function Testimonials() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <section className="tc-testimonials-style10">
      <div className="container">
        <div className="section-head text-center mb-80">
          <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - testimonials - </p>
          <h2 className="fsz-60 js-splittext-lines"> Happy Users Feedback </h2>
        </div>
        <div className="tc-testimonials-slider10">
          <Swiper {...swiperOptions}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testi-card">
                  <div className="row gx-0">
                    <div className="col-lg-7">
                      <div className="img img-cover">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="info">
                        <div className="logo">
                          <img src={isDark ? item.logo_dark : item.logo_light} alt="" />
                        </div>
                        <div className="info_card">
                          <div className="text fsz-21 sub_font lh-4">
                            {item.content}
                          </div>
                          <div className="btm_inf mt-70">
                            <div className="cont">
                              <h6 className="fsz-20 mb-2"> {item.author} </h6>
                              <p className="color-999"> {item.position} of <a href="#" className="color-000"> {item.at} </a> </p>
                            </div>
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrows">
            <a href="#0" className="button-prev"> <i className="fal fa-long-arrow-left"></i> </a>
            <a href="#0" className="button-next"> <i className="fal fa-long-arrow-right"></i> </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;