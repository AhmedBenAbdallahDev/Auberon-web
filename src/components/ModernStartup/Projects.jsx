"use client";
import { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper';
//= Data
import data from '@/data/ModernStartup/projects.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Keyboard],
  spaceBetween: 10,
  speed: 1000,
  pagination: {
    el: ".tc-projects-slider3 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.tc-projects-slider3 .swiper-button-next',
    prevEl: '.tc-projects-slider3 .swiper-button-prev',
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
      slidesPerView: 2,
    },
    787: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    }
  }
}

function Projects() {
  const [loadSwiper, setloadSwiper] = useState(false);

  useEffect(() => {
    setloadSwiper(true);
  }, []);

  return (
    <section className="tc-projects-style3">
      <div className="container-fluid">
        <div className="section-title mb-90">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="title">
                <h6 className="fsz-14 color-666 text-uppercase mb-20"> case studies </h6>
                <h2 className="fsz-50 mb-0"> Our <span className="sub_font fst-italic color-blue1"> featured works </span> </h2>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
              <div className="button_su">
                <span className="su_button_circle bg-light1 desplode-circle"></span>
                <a href="#" className="butn button_su_inner bg-transparent">
                  <span className="button_text_container fsz-16 text-uppercase"> All works </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tc-projects-slider3 wow fadeInUp slow">
          {
            loadSwiper &&
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="project-card">
                    <div className="img img-cover">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info">
                      <a href="#" className="arrow"> <i className="ti-arrow-top-right me-1"></i> </a>
                      <div className="cont">
                        <h4> <a href="#" className="fsz-25 mb-1"> {item.title} </a> </h4>
                        <p className="color-666 mb-20"> {item.details} </p>
                        <a href="#" className="tags"> {item.category} </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          }
          <div className="text-center">
            <div className="slider-controls">
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;