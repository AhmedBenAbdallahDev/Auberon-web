import React from 'react';

function Team() {
  return (
    <div className="tc-team-style1 main-box-style1 bg-dark1 radius-9 mx-4 my-3">
      <div className="container">
        <div className="tc-section-title-style1 mb-60 text-start">
          <h2 className="text-white"> Meet Our <span className="text-white"> Amazing Team </span> </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-2">
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.2s">
                <img src="/home_1/assets/img/users/1.png" alt="" />
                <div className="info">
                  <h6> Chris Evan </h6>
                </div>
              </a>
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.2s">
                <img src="/home_1/assets/img/users/2.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#" className="team-img-card img-cover lg-card wow zoomIn">
                <img src="/home_1/assets/img/users/3.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.2s">
                <img src="/home_1/assets/img/users/4.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.2s">
                <img src="/home_1/assets/img/users/5.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
            </div>
            <div className="col-lg-2 ord-last">
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.4s">
                <img src="/home_1/assets/img/users/6.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
              <div className="button_su wow zoomIn" data-wow-delay="0.4s">
                <span className="su_button_circle bg-blue3 desplode-circle" style={{ left: '99px', top: '313px' }}></span>
                <a href="#" className="butn button_su_inner bg-transparent">
                  <span className="button_text_container fsz-16 fw-400 lh-5 text-uppercase text-white">
                    See All <br /> Members <br /> <i className="ti-arrow-top-right mt-2"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-2">
              <a href="#" className="team-img-card img-cover wow zoomIn" data-wow-delay="0.6s">
                <img src="/home_1/assets/img/users/7.png" alt="" />
                <div className="info">
                  <h6> John Deo </h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team