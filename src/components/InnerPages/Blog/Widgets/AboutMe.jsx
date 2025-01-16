import React from 'react';

function AboutMe() {
  return (
    <div className="widget-box">
      <div className="widget-title">
        <h6 className="fsz-20 p-0 fw-bold"> About Me </h6>
      </div>
      <div className="img icon-150 img-cover mt-30 mx-auto">
        <img src="/inner_pages/assets/img/team/team_info1.png" alt="" />
      </div>
      <div className="info text-center pt-20">
        <a href="#" className="fsz-18 fw-bold hover-blue1 text-uppercase"> Rosalina D. Willaimson </a>
        <div className="text fsz-16 color-777 mt-10"> Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed </div>
        <div className="social-links mt-15">
          <a href="#" className="color-ccc m-2 hover-blue1"> <i className="fab fa-facebook-f"></i> </a>
          <a href="#" className="color-ccc m-2 hover-blue1"> <i className="fab fa-twitter"></i> </a>
          <a href="#" className="color-ccc m-2 hover-blue1"> <i className="fab fa-behance"></i> </a>
          <a href="#" className="color-ccc m-2 hover-blue1"> <i className="fab fa-linkedin-in"></i> </a>
          <a href="#" className="color-ccc m-2 hover-blue1"> <i className="fab fa-youtube"></i> </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe