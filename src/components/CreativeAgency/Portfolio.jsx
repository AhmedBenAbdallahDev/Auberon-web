"use client";
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import LightGallery from 'lightgallery/react';
//= Static Data
import data from '@/data/CreativeAgency/portfolio.json';

const swiperOptions = {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".tc-portfolio-slider5 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.tc-portfolio-slider5 .swiper-button-next',
    prevEl: '.tc-portfolio-slider5 .swiper-button-prev',
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
      slidesPerView: 2,
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

function Portfolio() {
  function openGallery(event, index) {
    event.preventDefault();
    let items = document.querySelector('.lg-react-element').children;
    items[index].click();
  }

  return (
    <section className="tc-portfolio-style5">
      <div className="container">
        <div className="title js-splittext-lines">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-70">
                <p className="fsz-14 text-uppercase color-666 mb-20"> portfolio </p>
                <h2 className="fsz-50"> Creative works </h2>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 text-lg-end">
              <div className="button_su border-0">
                <span className="su_button_circle bg-orange1 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-1 border-dark border button_su_inner bg-transparent hover-white py-3 px-5">
                  <span className="button_text_container fsz-14"> All works </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tc-portfolio-slider5 mt-5 mt-lg-0">
          <Swiper {...swiperOptions}>
            {data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="portfolio-card">
                  <a href={item.image} className="img img-cover" onClick={(e) => openGallery(e, index)}>
                    <img src={item.image} alt="" />
                    <span className="icon"> <i className="ti-arrow-top-right"></i> </span>
                  </a>
                  <div className="info pt-30">
                    <a href="#" className="fsz-30 fw-600 mb-10 hover-orange1"> {item.title} </a>
                    <p className="fsz-14 color-999"> {item.tags}  </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-controls">
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <LightGallery speed={500}>
        {data.map((item, index) => (
          <img src={item.image} key={index} alt="" />
        ))}
      </LightGallery>
    </section>
  )
}

export default Portfolio;