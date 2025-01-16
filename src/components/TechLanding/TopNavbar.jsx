"use client";
import React from 'react';

function TopNavbar() {
  function openSideMenu(event) {
    event.currentTarget.classList.toggle("active");
    document.querySelector("#side_menu").classList.toggle("show");
    document.querySelector(".side_overlay").classList.toggle("show");
  }

  return (
    <div className="top-nav">
      <div className="logo">
        <img src="/home_10/assets/img/logo.png" alt="" className="lt_item" />
        <img src="/home_10/assets/img/logo_wh.png" alt="" className="dr_item" />
      </div>
      <div className="target btn_wrapper">
        <div className="side-nav-icon side_menu_btn btn-item" onClick={openSideMenu}>
          <i className="fal fa-stream"></i>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar