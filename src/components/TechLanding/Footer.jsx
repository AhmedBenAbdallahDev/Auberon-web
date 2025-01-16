import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style10">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3">
            <div className="item">
              <h6 className="sub-title fsz-16 ltspc-2 text-uppercase mb-40"> - about us </h6>
              <div className="text fsz-16 lh-5 text-gray"> Cloud computing allows businesses  to store, manage, and process data  remotely, reducing the need for on  premises hardware & software. </div>
              <a href="#" className="text-decoration-underline mt-50"> Get In Touch <i className="fal fa-angle-right"></i> </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-5 mt-lg-0 ps-lg-4">
              <h6 className="sub-title fsz-16 ltspc-2 text-uppercase mb-40"> - services </h6>
              <ul className="links text-gray fsz-16">
                <li> <a href="#"> IT Solutions </a> </li>
                <li> <a href="#"> Web Developement </a> </li>
                <li> <a href="#"> App Development </a> </li>
                <li> <a href="#"> Search Engine Optimization </a> </li>
                <li> <a href="#"> Game Design </a> </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-5 mt-lg-0">
              <h6 className="sub-title fsz-16 ltspc-2 text-uppercase mb-40"> - other pages </h6>
              <ul className="links text-gray fsz-16">
                <li> <a href="#"> Pricing </a> <a href="#"> Item Support </a> </li>
                <li> <a href="#"> About us </a> <a href="#"> Foram </a> </li>
                <li> <a href="#"> Careers </a> <a href="#"> Report Abuse </a> </li>
                <li> <a href="#"> Features </a> <a href="#"> Live </a> </li>
                <li> <a href="#"> Blog </a> </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-5 mt-lg-0">
              <h6 className="sub-title fsz-16 ltspc-2 text-uppercase mb-40"> - opening hours </h6>
              <ul className="times text-gray fsz-16">
                <li> <span> Mon - Fri </span> <strong> 08 AM - 12 PM </strong> </li>
                <li> <span> Saturday </span> <strong> 09 AM - 10 PM </strong> </li>
                <li> <span> Sunday </span> <strong> Holiday </strong> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="logo-side">
                <a href="#" className="logo">
                  <img src="/home_10/assets/img/logo_wh.png" alt="" />
                </a>
                <span className="text-gray ms-4"> © 2023 By <a href="#" className="text-white"> Swak Co </a> </span>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
              <div className="social-icons">
                <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#"> <i className="fab fa-twitter"></i> </a>
                <a href="#"> <i className="fab fa-behance"></i> </a>
                <a href="#"> <i className="fab fa-youtube"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray py-4"> All Rights Reserved. Made with Love by <a href="#" className="text-white"> ThemesCamp </a> </p>
      </div>
    </footer>
  )
}

export default Footer