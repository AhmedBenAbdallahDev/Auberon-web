'use client';
import React, { useEffect, useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/PersonalPortfolio/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Keyboard],
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".tc-testimonials-slider8 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
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
      slidesPerView: 1,
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
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="tc-testimonials-style8">
      <div className="container wow fadeInUp slow" data-wow-delay="0.1s">
        <div className="title py-3 mb-30 border-bottom border-1 border_light">
          <p className="fsz-14 text-uppercase color-green1"> testimonials </p>
        </div>
        <div className="row mb-50 align-items-center">
          <div className="col-lg-9">
            <h2 className="fsz-50"> User feedbacks </h2>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
            <div className="arrows">
              <a href="#0" className="text-uppercase swiper-prev"> prev </a>
              <a href="#0" className="text-uppercase swiper-next"> next </a>
            </div>
          </div>
        </div>
        <div className="tc-testimonials-slider8 overflow-hidden">
          {
            loadSwiper &&
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <div className="text sub_font_2">
                      {item.content}
                    </div>
                    <div className="btm-info">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="client-card d-flex align-items-center">
                            <div className="img icon-45 rounded-circle overflow-hidden img-cover me-3">
                              <img src={item.picture} alt="" />
                            </div>
                            <div className="inf">
                              <h6 className="fsz-16 fw-bold mb-1"> {item.author} </h6>
                              <p className="fsz-14 color-666"> {item.position} of <a href="#" className="color-green1"> {item.project} </a> </p>
                            </div>
                          </div>
                        </div>
                        {
                          item.video &&
                          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <a href="#" className="butn text-white bg-green1 border-0 fsz-14 px-4 py-3"> <span> Play Video <i className="fal fa-play ms-2 fsz-10"></i> </span> </a>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          }
          <div className="text-center">
            <div className="slider-controls">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;