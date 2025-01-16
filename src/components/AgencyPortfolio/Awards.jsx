"use client";
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Static Data
import data from '@/data/AgencyPortfolio/awards.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 80,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 10000,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function Awards() {
  return (
    <div className="tc-awards-style1 main-box-style1 bg-white radius-9 mx-4 my-3">
      <div className="container">
        <div className="tc-section-title-style1 mb-40">
          <h2> Our <span> Awards </span> </h2>
        </div>
        <div className="content wow fadeInUp">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">hosted</th>
                  <th scope="col">Award</th>
                  <th scope="col">project</th>
                  <th scope="col">year</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.host}</td>
                    <td> <strong> {item.title} </strong> </td>
                    <td> <a href="#"> {item.project} </a> </td>
                    <td>{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button_su mt-70">
            <span className="su_button_circle bg-black desplode-circle"></span>
            <a href="#" className="butn text-capitalize button_su_inner hover-white">
              <span className="button_text_container"> Show More <i className="ti-angle-down ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
      <div className="slider-content float_box_container overflow-hidden">
        <div className="tc-awards-slider1">
          <Swiper {...swiperOptions}>
            {new Array(6).fill().map((_, i) => (
              <SwiperSlide key={i}>
                <div className="service-card">
                  <h2> <a href="#">Get Free Quote</a> </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="float_box">
          <p> <i className="ti-arrow-top-right fsz-70"></i> </p>
        </div>
      </div>
    </div>
  )
}

export default Awards