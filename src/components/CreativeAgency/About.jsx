import React from 'react';

function About() {
  return (
    <section className="tc-about-style5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="img">
              <img src="/home_5/assets/img/about.jpg" alt="" className="main-img wow zoomIn slow" />
              <div className="rotate-box" data-speed="1" data-lag="0.7">
                <a href="#" className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                      </path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900"> . read more about us . Swak agency </textPath>
                    </text>
                  </svg>
                </a>
                <i className="ti-arrow-top-right icon fsz-45"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info ps-lg-5 js-splittext-lines">
              <p className="fsz-14 text-uppercase color-666 mb-20"> About Us </p>
              <h2 className="fsz-50 mb-40"> We’re challengers at heart & builders </h2>
              <div className="text fsz-16 color-666 mb-50"> Swak Agency is a small startup agency. We help businesses elevate their value  through custom software development, product design, QA and consultancy services. </div>
              <a href="#" className="numb-card d-block pb-30 mb-30 border-1 border-bottom">
                <div className="row">
                  <div className="col-10">
                    <div className="cont d-flex">
                      <h3 className="color-orange1 fsz-45 me-20 flex-shrink-0 fw-500"> 85% </h3>
                      <p> happy customers <br /> & repeating </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="arrow fsz-27 color-999"> <i className="ti-arrow-top-right"></i> </span>
                  </div>
                </div>
              </a>
              <a href="#" className="numb-card d-block">
                <div className="row">
                  <div className="col-10">
                    <div className="cont d-flex">
                      <h3 className="color-orange1 fsz-45 me-20 flex-shrink-0 fw-500"> 352+ </h3>
                      <p> projects completed on <br /> over 20 countries </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="arrow fsz-27 color-999"> <i className="ti-arrow-top-right"></i> </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About