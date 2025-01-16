"use client";
import { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".tc-testimonials-slider3 .swiper-pagination",
    type: 'fraction',
  },
  navigation: {
    nextEl: '.tc-testimonials-slider3 .swiper-button-next',
    prevEl: '.tc-testimonials-slider3 .swiper-button-prev',
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 5000,
  },
  loop: false
}

function Testimonials() {
  useEffect(() => {
    document.body.addEventListener("mousemove", parallaxed);
    return () => document.body.removeEventListener("mousemove", parallaxed);
  }, []);

  function parallaxed(e) {
    var amountMovedX = (e.clientX * -0.3 / 10);
    var amountMovedY = (e.clientY * -0.3 / 10);
    var x = document.getElementsByClassName("parallaxed");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
  }

  return (
    <section className="tc-testimonials-style3 text-center">
      <div className="container-fluid">
        <div className="title js-splittext-lines">
          <h6 className="fsz-14 color-999 text-uppercase mb-20"> partner with more 100 brands </h6>
          <h2 className="fsz-50 mb-0"> Our <span className="sub_font fst-italic color-blue1"> Partners & Clients </span> </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tc-testimonials-slider3">
              <Swiper {...swiperOptions}>
                {new Array(2).fill().map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi-card js-splittext-lines">
                      <h3 className="fsz-30 mb-60 lh-4">
                        “Swak Agency is world class design and development work at a fair price point. The team is professional, does their homework, and nailed the final product. 10/10 recommend!.”
                      </h3>
                      <h6 className="fsz-18 text-uppercase"> Marco Asensio </h6>
                      <p className="fsz-14 color-999"> Senior Product Management, <a href="#" className="text-white text-decoration-underline"> Noxes International Co </a> </p>
                      <div className="logo mt-30">
                        <img src="/home_3/assets/img/logos/1_wh.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-center">
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-imgs parallaxed">
        <img src="/home_3/assets/img/testi/1.png" alt="" className="" />
        <img src="/home_3/assets/img/testi/2.png" alt="" className="parallaxed" />
        <img src="/home_3/assets/img/testi/3.png" alt="" className="" />
      </div>
    </section>
  )
}

export default Testimonials;