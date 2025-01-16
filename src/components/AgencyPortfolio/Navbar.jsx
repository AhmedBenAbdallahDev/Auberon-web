"use client";
import React from 'react';

function Navbar() {
  function openSideMenu(event) {
    event.currentTarget.classList.toggle("active");
    document.querySelector("#side_menu").classList.toggle("show");
    document.querySelector(".side_overlay").classList.toggle("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light style1">
      <div className="container-fluid align-items-center">
        <div className="mob-nav-toggles d-flex align-items-center justify-content-between">
          <a href="#" className="logo-brand">
            <img src="/home_1/assets/img/logo_home1.png" alt="" className="lt_item" />
            <img src="/home_1/assets/img/logo_home1_lt.png" alt="" className="dr_item" />
          </a>
          <div className="logo-text fsz-14 ms-100">
            Best WordPress Theme for <br /> Creative Portfolio
          </div>
        </div>
        <div className="nav-side d-flex">
          <div className="button_su">
            <span className="su_button_circle desplode-circle bg-dark"></span>
            <a href="#" className="butn text-capitalize button_su_inner bg-black py-3 px-4">
              <span className="button_text_container fsz-14 text-white"> Start Project <i className="ti-arrow-top-right ms-1"></i></span>
            </a>
          </div>
          <div className="button_su ms-3">
            <span className="su_button_circle desplode-circle bg-black"></span>
            <a href="#" className="butn text-capitalize button_su_inner py-3 hover-white px-4">
              <span className="button_text_container fsz-14"> <i className="ti-world me-1"></i> Eng </span>
            </a>
          </div>
          <a className="canvas-btn-style1 ms-3 side_menu_btn" onClick={openSideMenu}>
            <i className="las la-grip-lines"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar