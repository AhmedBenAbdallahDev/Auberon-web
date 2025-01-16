import React from 'react';
//= Components
import TopNavbar from './TopNavbar';

function Header() {
  return (
    <header className="tc-header-style10">
      <div className="container-fluid p-0">
        <TopNavbar />
        <div className="head-content">
          <div className="row align-items-end gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h1 className="animation__char_come"> New Era <br /> Of Technology </h1>
                <div className="btm-inf d-flex align-items-center">
                  <a href="#" className="butn-shadow me-30"> Our Services </a>
                  <a href="#" className="color-999 fw-bold"> Call Us. <span className="color-000"> +777 888 999 00 </span> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img" data-speed="1" data-lag="0.3">
                <img src="/home_10/assets/img/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_10/assets/img/symbol.png" alt="" className="symbol" />
    </header>
  )
}

export default Header