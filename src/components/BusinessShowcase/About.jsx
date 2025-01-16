import React from 'react';

function About() {
  return (
    <section className="tc-about-style6">
      <div className="container">
        <div className="row gx-0 align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow">
              <h6 className="color-red1 fsz-14 text-uppercase mb-30 fw-bold"> <span className="icon me-2"> &gt; </span> About Us </h6>
              <h2 className="fsz-50 fw-600 mb-30"> We’re challengers at heart & builders </h2>
              <div className="text fsz-16 color-666 mb-50">
                Swak Agency is a small startup agency. We help businesses elevate their value  through custom software development, product design, QA and consultancy services.
              </div>
              <p className="fsz-14 color-666"> <strong className="color-000"> Call us 24/7 </strong>. We can answer for all your questions. </p>
              <h5 className="fsz-22 color-red1 sub_font fw-600 mt-10"> 888 777 666 00, 99 (70) 333 222 0 </h5>
              <a href="#" className="butn_arrow_circle mt-40 hover-white hover-bg-red1">
                Learn More <span className="arrow"> <i className="far fa-long-arrow-right"></i> </span>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img" data-speed="1" data-lag="0.7">
              <img src="/home_6/assets/img/about.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default About