"use client";
import React from 'react';

function Footer() {
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0)
  }

  return (
    <footer className="tc-footer-style8">
      <div className="footer-content">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="foot-subs">
                <h2 className="fsz-60 mb-100"> Get daily updates </h2>
                <div className="form-group">
                  <span className="icon"> <i className="fal fa-envelope-open me-2"></i> </span>
                  <input type="text" placeholder="Business email" />
                  <button> subscribe </button>
                </div>
                <p className=" mt-3"> *** We will never save your data </p>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <p className="sub-title text-uppercase text-decoration-underline mb-30 mt-5 mt-lg-0"> contact us </p>
              <div className="contact-item text-uppercase mb-30 lh-6">
                <ul>
                  <li> <a href="#"> hello@Swakstudio.co </a> </li>
                  <li> <a href="#"> 90 Fairground rd, florida 3290, us </a> </li>
                  <li> <a href="#"> +32 (0)50 31 28 32 </a> </li>
                </ul>
              </div>
              <div className="contact-item text-uppercase lh-6">
                <ul>
                  <li> <a href="#"> jobs@Swak-DESIGN.com </a> </li>
                  <li> <a href="#"> 12/A, DUSTO TOWER, NYC </a> </li>
                  <li> <a href="#"> +32 (0)50 31 28 32 </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <p className="sub-title text-uppercase text-decoration-underline mb-30 mt-5 mt-lg-0"> OUR PAGES </p>
              <div className="links text-uppercase lh-6">
                <ul>
                  <li> <a href="#"> ABOUT ME </a> </li>
                  <li> <a href="#"> OUR SERVICES </a> </li>
                  <li> <a href="#"> CAREERS </a> </li>
                  <li> <a href="#"> PRICING </a> </li>
                  <li> <a href="#"> REFUND POLICY </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="text-uppercase m-0"> © 2023 - By <a href="#"> themescamp </a> </p>
            </div>
            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
              <div className="social me-lg-5">
                <a href="#" className=""> <i className="fab fa-facebook-f"></i> </a>
                <a href="#" className="ms-3"> <i className="fab fa-twitter"></i> </a>
                <a href="#" className="ms-3"> <i className="fab fa-behance"></i> </a>
                <a href="#" className="ms-3"> <i className="fab fa-youtube"></i> </a>
                <a href="#" className="ms-3"> <i className="fab fa-linkedin-in"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#0" className="to-top" onClick={scrollToTop}>
        <div className="cont">
          <span className="arrow"> <i className="fal fa-long-arrow-left"></i> </span>
          <span className="to-top-btn"> back to top </span>
        </div>
      </a>
    </footer>
  )
}

export default Footer