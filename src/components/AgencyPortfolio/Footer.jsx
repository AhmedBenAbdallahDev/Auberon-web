import React from 'react'

function Footer() {
  return (
    <footer className="tc-footer-style1 main-box-style1 bg-white radius-9 mx-4 my-3 mb-4">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="sub-title"> Swak - Creative Portfolio & Agency WP Theme </h6>
              <a href="#" className="fsz-22 text-decoration-underline color-000"> contact@Swakagency.co </a>
              <a href="#" className="mt-30"> 223 Thatcher Road St, Brooklyn, Mahattan, <br /> NY 10463 </a>
              <a href="#" className="mt-20"> (+053) 625 08 09 62 </a>
            </div>
            <div className="col-lg-2 offset-lg-2">
              <h6 className="sub-title"> Links </h6>
              <ul className="links">
                <li>
                  <a href="#"> About us </a>
                </li>
                <li>
                  <a href="#"> Works </a>
                </li>
                <li>
                  <a href="#"> Our Process </a>
                </li>
                <li>
                  <a href="#"> Career </a>
                </li>
                <li>
                  <a href="#"> News </a>
                </li>
                <li>
                  <a href="#"> Contact us </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="sub-title"> Resources </h6>
              <ul className="links">
                <li>
                  <a href="#"> Presentation (PDF) </a>
                </li>
                <li>
                  <a href="#"> FAQs </a>
                </li>
                <li>
                  <a href="#"> Policy </a>
                </li>
                <li>
                  <a href="#"> Term & Condition </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="sub-title"> Social </h6>
              <ul className="links">
                <li>
                  <a href="#"> Dribbble </a>
                </li>
                <li>
                  <a href="#"> Behance </a>
                </li>
                <li>
                  <a href="#"> Twitter </a>
                </li>
                <li>
                  <a href="#"> Facebook </a>
                </li>
                <li>
                  <a href="#"> Instagram </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-9">
              <div className="d-flex align-items-center flex-wrap">
                <div className="foot-logo">
                  <img src="/home_1/assets/img/logo_home1.png" alt="" className="lt_item" />
                  <img src="/home_1/assets/img/logo_home1_lt.png" alt="" className="dr_item" />
                </div>
                <div className="inf ms-80">
                  <p> © 2023 By <a href="#" className="color-000"> Swak </a> Co. All Rights Reserved. <br /> Designed by <a href="#" className="color-000"> ThemesCamp </a> </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <div className="button_su">
                <span className="su_button_circle desplode-circle bg-black"></span>
                <a href="#" className="butn text-capitalize button_su_inner py-3 hover-white px-4">
                  <span className="button_text_container fsz-14"> <i className="ti-world me-1"></i> Eng </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer