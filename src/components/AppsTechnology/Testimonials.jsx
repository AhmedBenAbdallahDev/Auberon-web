"use client";
import { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper';
//= Static Data
import data from '@/data/AppsTechnology/testimonials.json';

const swiperOptions = {
  modules: [Pagination, Keyboard, Autoplay],
  spaceBetween: 50,
  speed: 1000,
  pagination: {
    el: ".tc-testimonials-slider4 .swiper-pagination",
    clickable: true,
  },
  navigation: false,
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
  const [loadSwiper, setloadSwiper] = useState(false);

  useEffect(() => {
    setloadSwiper(true)
  }, []);

  return (
    <section className="tc-testimonials-style4 wow fadeInUp slow">
      <div className="container">
        <div className="title text-center">
          <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20"> Testimonials </p>
          <h2 className="fsz-60 mb-80"> Users good feedback </h2>
        </div>
        <div className="tc-testimonials-slider4">
          {
            loadSwiper &&
            <Swiper {...swiperOptions}>
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-card">
                    <div className="stars">
                      <a href="#"> <i className="fas fa-star"></i> </a>
                      <a href="#"> <i className="fas fa-star"></i> </a>
                      <a href="#"> <i className="fas fa-star"></i> </a>
                      <a href="#"> <i className="fas fa-star"></i> </a>
                      <a href="#"> <i className="fas fa-star"></i> </a>
                    </div>
                    <div className="logo">
                      <img src={item.imageLight} alt="" className="lt_item" />
                      <img src={item.imageDark} alt="" className="dr_item" />
                    </div>
                    <div className="text fsz-20">
                      {item.content}
                    </div>
                    <div className="client-card d-flex align-items-center mt-50">
                      <div className="img icon-50 rounded-circle overflow-hidden img-cover me-3">
                        <img src={item.picture} alt="" />
                      </div>
                      <div className="inf">
                        <h5 className="fsz-24 fw-bold mb-1"> {item.author} </h5>
                        <p className="fsz-14 color-666"> {item.position} of <a href="#" className="color-blue1"> {item.project} </a> </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          }
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;