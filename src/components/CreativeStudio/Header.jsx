"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Components
import Navbar from './Navbar';

function Header() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <header className="tc-header-style2">
      <Navbar />
      <div className="header-content">
        <div className="container">
          <div className="info wow fadeInUp slow">
            <p className="fsz-30 text-uppercase mb-50 js-splittext-lines"> Swak digital studio </p>
            <h1 className="js-splittext-lines"> grow <span className="color-lightGreen1"> brands’s </span> <br /> future </h1>
            <div className="text fsz-18 mb-90 js-splittext-lines"> We help our clients succeed by creating identities, <br /> digital experiences and print materials that communicate clearly, <br /> achieve marketing goals and look fantastic </div>
          </div>
          <div className="brands wow fadeInUp slow">
            <p className="fsz-22 text-uppercase mb-50"> trusted by <span className="color-lightGreen1"> +150 brands </span> </p>
            <div className="brands-content">
              <a href="#"> <img src={`/home_2/assets/img/logos/${isDark ? '1' : '01'}.png`} alt="" /> </a>
              <a href="#"> <img src={`/home_2/assets/img/logos/${isDark ? '2' : '02'}.png`} alt="" /> </a>
              <a href="#"> <img src={`/home_2/assets/img/logos/${isDark ? '3' : '03'}.png`} alt="" /> </a>
              <a href="#"> <img src={`/home_2/assets/img/logos/${isDark ? '4' : '04'}.png`} alt="" /> </a>
              <a href="#"> <img src={`/home_2/assets/img/logos/${isDark ? '5' : '05'}.png`} alt="" /> </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_2/assets/img/header.jpg" alt="" className="back-img" data-speed="1" data-lag="0.7" />
    </header>
  )
}

export default Header