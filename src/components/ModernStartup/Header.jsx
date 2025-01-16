"use client";
import React, { useState } from 'react';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';

function Header() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <header className="tc-header-style3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="info wow fadeInUp slow">
              <div className="sub-title"> startup agency </div>
              <h1>
                Top-notch solutions <br /> for <a href="#0" className="sub_font fst-italic color-blue1"> brand </a> , <a href="#0" className="sub_font fst-italic color-blue1"> website </a> & <a href="#0" className="sub_font fst-italic color-blue1"> mobile </a> <br /> application
              </h1>
              <div className="text color-666 mt-30">
                As a leading <b className="color-000"> digital company </b> in Paris, we look to engage with our <br /> clients beyond the conventional relationship.
              </div>
              <div className="button_su mt-70 border-0">
                <span className="su_button_circle bg-black desplode-circle"></span>
                <a href="#" className="butn button_su_inner bg-blue1 border-0">
                  <span className="button_text_container fsz-16 text-white text-uppercase"> See all services </span>
                </a>
              </div>
              <div className="numbers mt-100">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="num-card d-flex align-items-center mt-30">
                      <h3 className="fsz-40 color-blue1 me-20 fw-400 flex-shrink-0"> 85% </h3>
                      <p className="color-666 text-uppercase"> happy customers & repeating </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="num-card d-flex align-items-center mt-30">
                      <h3 className="fsz-40 color-blue1 me-20 fw-400 flex-shrink-0"> 325+ </h3>
                      <p className="color-666 text-uppercase"> projects completed on over 20 countries </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img img-cover" data-speed="1" data-lag="0.4">
              <img src="/home_3/assets/img/header.png" alt="" />
              <div className="button_su mt-70 border-0">
                <span className="su_button_circle bg-blue1 desplode-circle"></span>
                <a href="https://youtu.be/pGbIOC83-So?t=21" className="butn button_su_inner border-0" onClick={openVideo}>
                  <span className="button_text_container fsz-16 text-white text-capitalize"> <i className="la la-play"></i> Play Showreel </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </header>
  )
}

export default Header