import React from 'react'

function About() {
  return (
    <div className="tc-about-style2 float_box_container overflow-hidden position-relative">
      <a href="#" className="back-img img-cover">
        <img src="/home_2/assets/img/about.png" alt="" />
        <div className="rotate-box float_box">
          <div className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
            <svg className="textcircle" viewBox="0 0 500 500">
              <defs>
                <path id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                </path>
              </defs>
              <text>
                <textPath xlinkHref="#textcircle" textLength="1000">. view more about us  .  Swak agency</textPath>
              </text>
            </svg>
          </div>
          <i className="ti-arrow-top-right icon fsz-45"></i>
        </div>
      </a>
    </div>
  )
}

export default About