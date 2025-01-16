import React from 'react';

function About() {
  return (
    <section className="tc-about-style10">
      <div className="container-fluid p-0">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-6">
            <div className="img" data-speed="1" data-lag="0.2">
              <img src="/home_10/assets/img/about.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <div className="num-title"> 500+ <small> project done </small> </div>
              <div className="section-head mb-30">
                <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - about us </p>
                <h2 className="fsz-60 js-splittext-lines"> Reach Out To Us Anytime </h2>
              </div>
              <div className="text fsz-18 color-999 mb-30 pe-lg-5">
                Business is the activity of creating, producing, buying, or selling goods or services in exchange for money or other forms of value.
              </div>
              <a href="#" className="link"> Our Mission <i className="fal fa-long-arrow-right"></i> </a>
              <a href="#" className="link"> Our Vision <i className="fal fa-long-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About