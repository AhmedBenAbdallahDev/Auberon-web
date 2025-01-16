"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Lazy, Mousewheel, Parallax } from 'swiper';
import LightGallery from 'lightgallery/react';
//= Components
import Navbar from '../Common/Navbar';
//= Static Data
import data from '@/data/InnerPages/Gallery/gallery.json';

const swiperOptions = {
  modules: [Autoplay, Mousewheel, Parallax, Lazy, Keyboard],
  slidesPerView: 1.6,
  spaceBetween: 90,
  centeredSlides: true,
  speed: 1000,
  pagination: false,
  mousewheel: true,
  loop: false,
  parallax: true,
  navigation: false,
  lazy: {
    loadPrevNext: true,
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    787: {
      slidesPerView: 1.6,
    },
    1900: {
      slidesPerView: 1,
    }
  }
}

function Gallery() {
  function openGallery(event, index) {
    event.preventDefault();
    let items = document.querySelector('.lg-react-element').children;
    items[index].click();
  }

  return (
    <header className="tc-inner-header-style1 pb-60 pt-120">
      <Navbar darkLogo />
      <div className="header-gallery text-center">
        <div className="container">
          <div className="gallery-slider-style1">
            <Swiper {...swiperOptions}>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href="#" className="img img-cover" onClick={(e) => openGallery(e, index)}>
                    <img src={item} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol1" />
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol2" />
      <LightGallery speed={500}>
        {data.map((item, index) => (
          <img src={item} alt="" key={index} />
        ))}
      </LightGallery>
    </header>
  )
}

export default Gallery