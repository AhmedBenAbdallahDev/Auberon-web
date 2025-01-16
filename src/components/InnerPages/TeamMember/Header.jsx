import React from 'react';
//= Components
import Navbar from '../Common/Navbar';

function Header() {
  return (
    <header className="tc-team-member-header-style1">
      <Navbar />
      <div className="header-content">
        <div className="container">
          <div className="head-links">
            <h1> Team Detail </h1>
            <span className="line"></span>
            <div className="links">
              <a href="#"> Home  /  </a>
              <a href="#"> alonso d. dowson </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header