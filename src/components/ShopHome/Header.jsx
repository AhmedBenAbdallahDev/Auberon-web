import React from 'react';
//= Components
import FeaturesCards from './Cards';

function Header() {
  return (
    <header className="tc-header-style9">
      <div className="header-content">
        <div className="container">
          <div className="top-info">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="img">
                  <img src="/home_9/assets/img/head1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <div className="rotate-box" data-speed="1" data-lag="0.5">
                    <a href="#" className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                          </path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900"> minimal furniture store in new york    -- </textPath>
                        </text>
                      </svg>
                    </a>
                    <img src="/home_9/assets/img/mark1.png" alt="" className="icon" />
                  </div>
                  <h1 className="fsz-50 mt-100"> Avot Minimal Furniture </h1>
                  <div className="head-items d-flex align-items-center mt-30">
                    <div className="item me-40">
                      <p className="color-999 mb-2"> Origin </p>
                      <h6> Sydney, Australia </h6>
                    </div>
                    <div className="item me-40">
                      <p className="color-999 mb-2"> Material </p>
                      <h6> Wood, Steel </h6>
                    </div>
                    <div className="item">
                      <p className="color-999 mb-2"> Designer </p>
                      <h6> Helson D. Dowson </h6>
                    </div>
                  </div>
                  <div className="button_su mt-40 rounded-circle">
                    <span className="su_button_circle desplode-circle bg-dark"></span>
                    <a href="#" className="butn text-capitalize button_su_inner bg-transparent pt-20 pb-20 px-5 hover-white rounded-circle">
                      <span className="button_text_container fsz-14 fw-500"> View Colletions </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeaturesCards />
        </div>
        <img src="/home_9/assets/img/pattern_1.png" alt="" className="pattern" data-lag="0.6" />
      </div>
    </header>
  )
}

export default Header