import React from 'react';
//= Components
import Navbar from '../Common/Navbar';

function Header() {
  return (
    <header className="tc-about-header-style1">
      <Navbar />
      <div className="header-content">
        <div className="container">
          <div className="info wow fadeInUp slow">
            <h6> Swak digital studio </h6>
            <h1> We are friendly and experienced <br /> Product Design Agency </h1>
          </div>
          <div className="pages-links">
            <a href="#"> home </a>
            <a href="#" className="active ms-1"> about </a>
          </div>
        </div>
      </div>

      <img src="/inner_pages/assets/img/about/head_mask.png" alt="" className="back-img" data-speed="1" data-lag="0.2" />
      <img src="/inner_pages/assets/img/about/symbol.png" alt="" className="symbol-img" data-speed="1" data-lag="0.7" />
    </header>
  )
}

export default Header