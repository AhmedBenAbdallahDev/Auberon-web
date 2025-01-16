import React from 'react';

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-5 justify-content-between">
          <div className="col-lg-6 pe-lg-5">
            <div className="img img-cover wow fadeInUp slow">
              <img src="/home_7/assets/img/about.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info ps-lg-5 wow fadeInUp slow">
              <h2 className="fsz-60"> Digital Solutions to Build & Grow your Business </h2>
              <div className="text fsz-16 color-777 ps-20 border-start border-2 border-orange2 mt-40 mb-30 pe-lg-5">
                Far far away, behind the word mountains, far from the countries vokalia and consonantia, there live the blind texts. Separated they live in bookmarks grove right at the coast.
              </div>
              <ul className="fsz-18 lh-lg">
                <li> <span className="icon"> <i className="fal fa-check-circle me-10 color-orange2"></i> </span> <strong className="fw-500"> Premium services & beyond </strong> </li>
                <li> <span className="icon"> <i className="fal fa-check-circle me-10 color-orange2"></i> </span> <strong className="fw-500"> Great Price Competitive </strong> </li>
                <li> <span className="icon"> <i className="fal fa-check-circle me-10 color-orange2"></i> </span> <strong className="fw-500"> Get the best support among </strong> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About