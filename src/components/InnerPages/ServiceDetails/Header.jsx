import React from 'react';
//= Components
import Navbar from '../Common/Navbar';

function Header() {
  return (
    <header className="tc-service-det-header-style1">
      <Navbar />
      <div className="header-content">
        <div className="container">
          <div className="content text-center">
            <div className="pages-links">
              <a href="#"> pages </a>
              <a href="#" className="active ms-1"> web development </a>
            </div>
            <h1> Web Developments </h1>
          </div>
        </div>
      </div>
      <img src="/inner_pages/assets/img/service_det/symbol3.png" alt="" className="symbol-img" />
    </header>
  )
}

export default Header