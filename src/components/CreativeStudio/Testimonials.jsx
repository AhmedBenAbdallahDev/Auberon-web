"use client";
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/CreativeStudio/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Keyboard],
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".tc-testimonials-slider2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 5000,
  },
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    787: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.1,
    }
  }
}

function Testimonials() {
  return (
    <section className="tc-testimonials-style2">
      <div className="container">
        <div className="title mb-100">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <h2 className="fsz-45 text-uppercase fw-500 mb-0"> testimonials </h2>
            </div>
            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
              <div className="arrows">
                <button className="swiper-prev mx-2"> <i className="la la-angle-left"></i> </button>
                <button className="swiper-next"> <i className="la la-angle-right"></i> </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tc-testimonials-slider2 wow fadeInUp slow">
          <Swiper {...swiperOptions} className="swiper-wrapper" style={{ overflow: 'visible' }}>
            {
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <div className="client-det">
                      <div className="client">
                        <div className="icon img-cover">
                          <img src={item.picture} alt="" />
                        </div>
                        <div className="inf">
                          <b className="fsz-16 fw-bold mb-1"> {item.name} </b>
                          <p className="fsz-14 color-666"> {item.position} of <a href="#" className="text-info"> {item.at} </a> </p>
                        </div>
                      </div>
                      <div className="logo">
                        <img src={item.logo} alt="" />
                      </div>
                    </div>
                    <div className="text fsz-22 mb-40 fw-500">
                      {item.content}
                    </div>
                    <a href="#" className="text-uppercase"> {item.project} / <span className="color-999"> {item.tags} </span> </a>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;