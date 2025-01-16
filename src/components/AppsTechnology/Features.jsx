"use client";
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper';
//= Static Data
import data from '@/data/AppsTechnology/features.json';

const swiperOptions = {
  modules: [Pagination, Autoplay, Keyboard],
  slidesPerView: 2,
  spaceBetween: 50,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: false,
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

function Features() {
  return (
    <section className="tc-features-style4">
      <div className="container position-static wow fadeInUp slow">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-5">
            <div className="info-side">
              <div className="content">
                <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20"> How It Works </p>
                <h2 className="fsz-60 mb-30"> Reach out & let’s get to know each other </h2>
                <div className="text color-666 fsz-14"> As a leading <strong className="color-000"> app showcase </strong> in Paris, we look to engage with our <br /> clients beyond the conventional relationship. </div>
                <div className="button_su mt-80">
                  <span className="su_button_circle bg-light1 desplode-circle"></span>
                  <a href="#" className="butn button_su_inner bg-transparent">
                    <span className="button_text_container fsz-16 text-uppercase"> more features </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tc-features-slider4">
              <Swiper {...swiperOptions}>
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="features-card">
                      <div className="cont">
                        <div className="icon">
                          <img src={item.icon} alt="" />
                        </div>
                        <div className="info">
                          <h2 className="num"> {item.num} </h2>
                          <h6 className="fsz-24 fw-700"> {item.title} </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <img src="/home_4/assets/img/features.png" alt="" className="shap-1" />
      <img src="/home_4/assets/img/icons/star.png" alt="" className="shap-2" data-speed="1" data-lag="0.7" />
    </section>
  )
}

export default Features;