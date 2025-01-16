import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style9">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <h5 className="fsz-24 fw-500 mb-30"> Work Inquiry </h5>
                <ul>
                  <li> <a href="#"> contact@Swak-app.com </a> </li>
                  <li> <a href="#"> (054) 8687 90 50 </a> </li>
                </ul>
              </div>
              <div className="item mt-5">
                <h5 className="fsz-24 fw-500 mb-30"> London </h5>
                <ul>
                  <li> <a href="#"> 205B Shaftesbury Avenuem <br /> London SE15 4BQ <br /> UK </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item mt-5 mt-lg-0">
                <h5 className="fsz-24 fw-500 mb-30"> Other Pages </h5>
                <ul className="half-links">
                  <li> <a href="#"> About Us </a>  <a href="#"> Refund Policy </a> </li>
                  <li> <a href="#"> Services </a>  <a href="#"> Product Status </a> </li>
                  <li> <a href="#"> Insights </a>  <a href="#"> Design Kit </a> </li>
                  <li> <a href="#"> Price & Plan </a>  <a href="#"> Publication </a> </li>
                  <li> <a href="#"> T & C </a>  <a href="#">  </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 ps-lg-5">
              <div className="insta-foot mt-5 mt-lg-0">
                <h5 className="fsz-24 fw-500 mb-30"> Instagram Feeds </h5>
                <div className="row gx-3">
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="img img-cover th-70 radius-4 mb-15 overflow-hidden">
                      <img src="/home_9/assets/img/insta/6.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot py-4 border-1 border-top brd-light text-uppercase">
          <div className="row">
            <div className="col-lg-3 text-center text-lg-start">
              <p className="my-2"> © 2023 - By <a href="#"> themescamp </a> </p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links text-center">
                <a href="#" className="my-2 mx-3"> service </a>
                <a href="#" className="my-2 mx-3"> works </a>
                <a href="#" className="my-2 mx-3"> about </a>
                <a href="#" className="my-2 mx-3"> news </a>
                <a href="#" className="my-2 mx-3"> contact </a>
                <a href="#" className="my-2 mx-3"> policy </a>
              </div>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <div className="dropdown my-2">
                <button className="border-0 bg-transparent p-0 text-white dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fal fa-globe me-1"></i> ENG
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
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