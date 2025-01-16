"use client";
import React from 'react';

function Footer() {
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0)
  }

  return (
    <footer className="tc-footer-style7 overflow-hidden">
      <div className="container">
        <div className="top-content">
          <div className="row">
            <div className="col-lg-6">
              <ul className="fsz-16 text-uppercase">
                <li> <a href="#"> hello@Swakstudio.co </a> </li>
                <li> <a href="#"> 90 Fairground rd, florida 3290, us </a> </li>
                <li> <a href="#"> +32 (0)50 31 28 32 </a> </li>
              </ul>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <a href="#" className="fsz-16 text-uppercase"> weekly newsletter </a>
              <div className="subs-form">
                <div className="form-group">
                  <span className="icon"> <i className="fal fa-envelope-open me-2"></i> </span>
                  <input type="text" className="form-control" placeholder="email address" />
                  <button> subscribe </button>
                </div>
                <p className="fsz-16 color-999 op-7 mt-15"> *** We will never save your data </p>
              </div>
            </div>
            <div className="col-lg-2 mt-4 mt-lg-0 text-lg-end">
              <ul className="links fsz-16 text-uppercase lh-6">
                <li> <a href="#" className="hover-underline hover-orange2"> facebook </a> </li>
                <li> <a href="#" className="hover-underline hover-orange2"> twitter </a> </li>
                <li> <a href="#" className="hover-underline hover-orange2"> behance </a> </li>
                <li> <a href="#" className="hover-underline hover-orange2"> youtube </a> </li>
                <li> <a href="#" className="hover-underline hover-orange2"> linkedin </a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-10">
            <h2 className="lg-word"> swak </h2>
          </div>
          <div className="col-2 text-end">
            <a href="#0" className="to-top" onClick={scrollToTop}>
              <span className="arrow"> <i className="fal fa-long-arrow-left"></i> </span>
              <span className="to-top-btn"> back to top </span>
            </a>
          </div>
        </div>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </footer>
  )
}

export default Footer