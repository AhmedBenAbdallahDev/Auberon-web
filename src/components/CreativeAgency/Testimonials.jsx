'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Static Data
import data from '@/data/CreativeAgency/testimonials.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  autoplay: {
    delay: 1,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
    },
    480: {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
    },
    787: {
      slidesPerView: 2,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
    },
    991: {
      slidesPerView: 2,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
    },
    1200: {
      speed: 30000,
      autoplay: {
        delay: 1,
      },
    }
  }
}

function Testimonials() {
  return (
    <section className="tc-testimonials-style5">
      <div className="tc-testimonials-slider5">
        <Swiper {...swiperOptions}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testi-item">
                <div className="logo th-50 mb-20">
                  <img src={item.logo} alt="" />
                </div>
                <div className="text mb-90 fsz-20"> {item.content} </div>
                <div className="client-card d-flex align-items-center">
                  <div className="img icon-45 rounded-circle overflow-hidden img-cover me-3">
                    <img src={item.picture} alt="" />
                  </div>
                  <div className="inf">
                    <h6 className="fsz-16 fw-500 mb-1"> {item.name} </h6>
                    <p className="fsz-14 color-666"> {item.position} of <a href="#" className="color-orange1"> {item.project} </a> </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials;