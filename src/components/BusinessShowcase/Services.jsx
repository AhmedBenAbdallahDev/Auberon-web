"use client";
import React from 'react';
//= Static Data
import data from '@/data/BusinessShowcase/services.json';

function Services() {
  function showDetails(event) {
    const text = event.currentTarget.querySelector('.text');
    text.style.maxHeight = 70 + 'px';
  }

  function hideDetails(event) {
    const text = event.currentTarget.querySelector('.text');
    text.style.maxHeight = 0 + 'px';
  }

  return (
    <section className="tc-services-style6">
      <div className="container">
        <div className="section-head text-center mb-50 js-splittext-lines">
          <h6 className="color-red1 fsz-14 text-uppercase mb-30 fw-bold"> <span className="icon me-2"> &gt; </span>  services  <span className="icon ms-2"> &lt; </span> </h6>
          <h2 className="fsz-50 fw-600 mb-30"> Our solution & services </h2>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id} onMouseMove={showDetails} onMouseLeave={hideDetails}>
              <a href="#" className="service-card wow fadeInUp slow">
                <span className="float-icon"> <i className="ti-arrow-top-right"></i> </span>
                <div className="img">
                  <img src={item.icon} alt="" />
                </div>
                <div className="info">
                  <h5 className="fsz-24 fw-600"> {item.title} </h5>
                  <div className="text"> {item.details} </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services