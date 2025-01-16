import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style3">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4">
              <div className="subscribe-side">
                <h5 className="fsz-21 mb-60"> Be the first to get the latest news about trends, inspirations and more </h5>
                <form action="" className="subs-form">
                  <div className="form-group">
                    <span className="icon"> <i className="la la-envelope"></i> </span>
                    <input type="text" placeholder="Enter your email adress" />
                    <button> subscribe </button>
                  </div>
                  <p className="color-999 mt-2"> By subscribing, you’re accept <a href="#" className="color-000 text-decoration-underline"> Privacy Policy </a> </p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="links-item mb-5">
                <h5 className="sub-title fsz-21 mb-4 mt-5 mt-lg-0"> Work Inquiry </h5>
                <ul className="color-999">
                  <li> <a href="#"> contact@Swak-statup.com </a> </li>
                  <li> <a href="#"> (054) 8687 90 50 </a> </li>
                </ul>
              </div>

              <div className="links-item">
                <h5 className="sub-title fsz-21 mb-4"> London </h5>
                <ul className="color-999">
                  <li> <a href="#"> 205B Shaftesbury Avenuem <br /> London SE15 4BQ UK </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="links-item mb-5 mt-5 mt-lg-0">
                <h5 className="sub-title fsz-21 mb-4"> Open Position </h5>
                <ul className="color-999">
                  <li> <a href="#"> UI/UX Website Designer </a> </li>
                  <li> <a href="#"> Senior Front-end WordPress Developer </a> </li>
                </ul>
              </div>

              <div className="links-item">
                <h5 className="sub-title fsz-21 mb-4"> Links </h5>
                <ul className="color-999">
                  <li> <a href="#">  Terms & Conditions <br /> Privacy Policy </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-5">
              <p> © Swak Startup Agency 2023 </p>
            </div>
            <div className="col-lg-5">
              <div className="social-links">
                <a href="#"> Dribbble </a>
                <a href="#"> Behance </a>
                <a href="#"> Instagram </a>
                <a href="#"> Linkedin </a>
                <a href="#"> Youtube </a>
              </div>
            </div>
            <div className="col-lg-2 text-lg-end d-none d-lg-block">
              <div className="dropdown">
                <button className="border-0 bg-transparent p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti-world me-1"></i> ENG
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">FR</a></li>
                  <li><a className="dropdown-item" href="#">AR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer