"use client";
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  navigation: false,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function About() {
  return (
    <section className="tc-about-style3">
      <div className="container-fluid">
        <div className="why-choose-style3 wow fadeInUp slow">
          <p className="fsz-14 color-666 text-uppercase"> why Swak is your 1st choice? </p>
          <div className="row">
            <div className="col-lg-4">
              <div className="choose-card">
                <span className="icon"> <i className="las la-crown"></i> </span>
                <h3> Top-notch Experts </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-card">
                <span className="icon"> <i className="lar la-comments"></i> </span>
                <h3> Dedicated Support 24/7 </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-card">
                <span className="icon"> <i className="las la-hand-holding-usd"></i> </span>
                <h3> Flexiable Price To Start </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6">
              <div className="img img-cover wow fadeInUp slow">
                <img src="/home_3/assets/img/about.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
                <h2 className="fsz-50 mb-40"> Transforming business to <br /> compete for <span className="sub_font fst-italic color-blue1"> tomorrow </span> </h2>
                <div className="text fsz-14 color-666">
                  Swak Agency is a small startup agency. We help businesses elevate their value <br /> through custom software development, product design, QA and consultancy services. <br /> We will help you to ideate, design and implement your product from conception to iterative <br /> development support, always taking the initiative & working proactively.
                </div>
                <div className="button_su mt-70">
                  <span className="su_button_circle bg-white desplode-circle"></span>
                  <a href="#" className="butn button_su_inner bg-transparent">
                    <span className="button_text_container fsz-16 text-uppercase"> more about us </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-marqee-style3">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> Get Free Consultation  <span className="icon-10 rounded-circle bg-white mx-5"></span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Get Free Consultation  <span className="icon-10 rounded-circle bg-white mx-5"></span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Get Free Consultation  <span className="icon-10 rounded-circle bg-white mx-5"></span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Get Free Consultation  <span className="icon-10 rounded-circle bg-white mx-5"></span> </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default About