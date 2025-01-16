"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 50,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true,
}

function TextSliders() {
  return (
    <div className="text-sliders float_box_container overflow-hidden">
      <div className="services-text-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> affordable Price <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> top experts <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> dedicated support <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> 100% Secure <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="services-text-slider" dir="rtl">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> affordable Price <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> top experts <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> dedicated support <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> 100% Secure <img src="/home_2/assets/img/icons/star.png" alt="" className="ms-30" /> </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="float_box">
        <p className="fsz-14"> hold <br /> and drag </p>
      </div>
    </div>
  )
}

export default TextSliders