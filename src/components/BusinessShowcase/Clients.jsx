"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';

function Clients() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <section className="tc-clients-style6">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-7">
            <div className="logos wow fadeInUp slow">
              <div className="row gx-0">
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo btn_wrapper"> <img src={`/home_6/assets/img/logos/${isDark ? '01' : '8'}.png`} alt="" className="btn-item" /> </a>
                </div>
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo btn_wrapper"> <img src={`/home_6/assets/img/logos/${isDark ? '02' : '9'}.png`} alt="" className="btn-item" /> </a>
                </div>
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo btn_wrapper"> <img src={`/home_6/assets/img/logos/${isDark ? '06' : '10'}.png`} alt="" className="btn-item" /> </a>
                </div>
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo border-0 btn_wrapper"> <span className="text-uppercase color-red1 text-decoration-underline btn-item"> become our client </span> </a>
                </div>
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo btn_wrapper"> <img src={`/home_6/assets/img/logos/${isDark ? '04' : '11'}.png`} alt="" className="btn-item" /> </a>
                </div>
                <div className="col-lg-4 col-6">
                  <a href="#" className="logo btn_wrapper"> <img src={`/home_6/assets/img/logos/${isDark ? '05' : '12'}.png`} alt="" className="btn-item" /> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h6 className="color-red1 fsz-14 text-uppercase mb-30 fw-bold"> <span className="icon me-2"> &gt; </span>  sponsors </h6>
              <h2 className="fsz-50 fw-600"> This Involves Managing A Client Public Image </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients