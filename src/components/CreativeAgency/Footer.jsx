import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style5">
      <div className="container">
        <div className="foot-content">
          <div className="row gx-5">
            <div className="col-lg-3">
              <div className="logo-side">
                <div className="logo th-40 mb-30">
                  <img src="/home_5/assets/img/logo.png" alt="" className="lt_item" />
                  <img src="/home_5/assets/img/logo_lt.png" alt="" className="dr_item" />
                </div>
                <div className="text color-666">
                  A legal entity that is separate from its owners and shareholders, providing an limited liability protection.
                </div>
                <div className="mail-card">
                  <span className="icon"> <i className="fal fa-envelope-open"></i> </span>
                  <div className="cont">
                    <p className="color-666"> Support Email </p>
                    <h6 className="fsz-20"> info@Swak.com </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-5 mt-lg-0">
                <h5 className="sub-title fsz-24 mb-40"> Other Pages </h5>
                <ul className="half-links color-666">
                  <li> <a href="#"> About Us </a>  <a href="#"> Refund Policy </a> </li>
                  <li> <a href="#"> Services </a>  <a href="#"> Product Status </a> </li>
                  <li> <a href="#"> Insights </a>  <a href="#"> Design Kit </a> </li>
                  <li> <a href="#"> Price & Plan </a>  <a href="#"> Publication </a> </li>
                  <li> <a href="#"> T & C </a>  <a href="#">  </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-5 mt-lg-0">
                <h5 className="sub-title fsz-24 mb-40"> Our Service </h5>
                <ul className="links">
                  <li> <a href="#"> Web Development </a> </li>
                  <li> <a href="#"> UI & UX Designer </a> </li>
                  <li> <a href="#"> App Development </a> </li>
                  <li> <a href="#"> Mockup Design </a> </li>
                  <li> <a href="#"> 24/7 Support </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-5 mt-lg-0">
                <h5 className="sub-title fsz-24 mb-40"> Social Connect </h5>
                <ul className="links">
                  <li> <a href="#"> <i className="fab fa-facebook-f me-2"></i> Facebook </a> </li>
                  <li> <a href="#"> <i className="fab fa-twitter me-2"></i> Twitter </a> </li>
                  <li> <a href="#"> <i className="fab fa-behance me-2"></i> Behance </a> </li>
                  <li> <a href="#"> <i className="fab fa-youtube me-2"></i> Youtube </a> </li>
                  <li> <a href="#"> <i className="fab fa-dribbble me-2"></i> Dribbble </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-4">
              <p> © 2023 - <a href="#" className="fw-bold text-uppercase hover-orange1"> By themescamp </a> </p>
            </div>
            <div className="col-lg-8 text-lg-end mt-4 mt-lg-0">
              <div className="foot-links">
                <a href="#"> service </a>
                <a href="#"> works </a>
                <a href="#"> about </a>
                <a href="#"> news </a>
                <a href="#"> contact </a>
                <a href="#"> policy </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer