"use client";
import React from 'react';

function Navbar() {
  function openSideMenu(event) {
    event.currentTarget.classList.toggle("active");
    document.querySelector("#side_menu").classList.toggle("show");
    document.querySelector(".side_overlay").classList.toggle("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/home_4/assets/img/logo.png" alt="" className="logo lt_item" />
          <img src="/home_4/assets/img/logo_lt.png" alt="" className="logo dr_item" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mt-4 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
          </ul>
          <div className="nav-side">
            <a href="#" className="text-uppercase text-decoration-underline"> get free demo </a>
            <div className="btn_wrapper d-inline-block">
              <a className="canvas-btn-style3 ms-3 side_menu_btn active btn-item" onClick={openSideMenu}>
                <i className="las la-grip-lines"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar