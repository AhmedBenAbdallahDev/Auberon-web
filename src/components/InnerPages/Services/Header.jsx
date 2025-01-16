import React from 'react';
//= Components
import Navbar from '../Common/Navbar';

function Header() {
  return (
    <header className="tc-services-header-style1">
      <Navbar />
      <div className="header-content">
        <div className="container">
          <div className="info">
            <h6> swat digital studio </h6>
            <h1> These services can include <br /> Web Design, UX Design </h1>
          </div>
          <div className="img img-cover">
            <img src="/inner_pages/assets/img/services/ser_header.png" alt="" />
          </div>
        </div>
      </div>

      <img src="/inner_pages/assets/img/about/symbol.png" alt="" className="symbol-img" />
      <img src="/inner_pages/assets/img/services/symbol2.png" alt="" className="symbol-img2" />
    </header>
  )
}

export default Header