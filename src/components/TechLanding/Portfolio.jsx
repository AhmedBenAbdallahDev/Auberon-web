"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/TechLanding/portfolio.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Keyboard],
  slidesPerView: 2,
  spaceBetween: 50,
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: '.tc-portfolio-style10 .button-next',
    prevEl: '.tc-portfolio-style10 .button-prev',
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

function Portfolio() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <section className="tc-portfolio-style10 overflow-hidden">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-150">
                <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - portfolio </p>
                <h2 className="fsz-60 js-splittext-lines"> Something Truely In Happen </h2>
              </div>
              <div className="arrows">
                <a href="#0" className="button-prev"> <i className="fal fa-long-arrow-left"></i> </a>
                <a href="#0" className="button-next"> <i className="fal fa-long-arrow-right"></i> </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5">
            <div className="tc-portfolio-slider10">
              <Swiper {...swiperOptions}>
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="portfolio-card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="info">
                        <div className="logo">
                          <img src={`/home_10/assets/img/clients/${isDark ? '012' : 'noxes'}.png`} alt="" />
                        </div>
                        <div className="inf">
                          <p className="fsz-14 color-777 ltspc-1 text-uppercase mb-2"> {item.tag} </p>
                          <h3 className="fsz-24"> {item.title} </h3>
                        </div>
                      </div>
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

export default Portfolio;