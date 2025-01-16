import React from 'react';

function AboutImg() {
  return (
    <section className="tc-about-img-style1">
      <div className="container">
        <div className="img">
          <img src="/inner_pages/assets/img/about/about.jpg" alt="" className="main-img" />
          <div className="rotate-box" data-speed="1" data-lag="0.7">
            <a href="#" className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
              <svg className="textcircle" viewBox="0 0 500 500">
                <defs>
                  <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                  </path>
                </defs>
                <text>
                  <textPath xlinkHref="#textcircle" textLength="1000">. view more about us . Swak agency</textPath>
                </text>
              </svg>
            </a>
            <i className="ti-arrow-top-right icon fsz-45 color-blue1"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutImg