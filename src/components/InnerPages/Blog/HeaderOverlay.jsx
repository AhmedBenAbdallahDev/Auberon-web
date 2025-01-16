import React from 'react';
//= Components
import Navbar from '../Common/Navbar';

function Header() {
  return (
    <header className="tc-inner-header-style1">
      <Navbar darkLogo />
      <div className="header-content text-center">
      </div>
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol1" />
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol2" />
    </header>
  )
}

export default Header