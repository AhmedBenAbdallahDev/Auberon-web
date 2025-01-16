"use client";
import { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
//= Static Data
import data from '@/data/AgencyPortfolio/testimonials.json';

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination, Keyboard],
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".tc-testimonials-slider1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.tc-testimonials-slider1 .swiper-button-next',
    prevEl: '.tc-testimonials-slider1 .swiper-button-prev',
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
  const [loadSwiper, setloadSwiper] = useState(false);

  useEffect(() => {
    setloadSwiper(true);
  }, []);

  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="tc-section-title-style1 mb-90">
          <h2> Client’s <span> Testimonials </span> </h2>
        </div>
        <div className="tc-testimonials-slider1 overflow-hidden wow fadeInUp">
          {
            loadSwiper &&
            <Swiper {...swiperOptions}>
              {data.map(item => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <div className="text">
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
                              <h6 className="fsz-16 fw-bold mb-1"> {item.name} </h6>
                              <p className="fsz-14 color-666"> {item.position} of <a href="#" className="text-primary"> {item.at} </a> </p>
                            </div>
                          </div>
                        </div>
                        {
                          item.video &&
                          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <a href="#" className="butn main-hover-black fsz-14 px-4 py-3"> <span> Play Video <i className="la la-play ms-1 fsz-18"></i> </span> </a>
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

export default Testimonials