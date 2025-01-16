import React from 'react';

function Projects() {
  return (
    <section className="tc-projects-style6 wow fadeInUp slow">
      <div className="row gx-0">
        <div className="col-lg-6">
          <div className="project-card">
            <div className="img img-cover">
              <img src="/home_6/assets/img/proj1.png" alt="" />
            </div>
            <div className="info">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2 className="fsz-40"> Dope Case <br /> Studies </h2>
                </div>
                <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                  <a href="#" className="butn_arrow_circle text-white border-0 bg-red1">
                    Learn More <span className="arrow bg-white color-000"> <i className="far fa-long-arrow-right"></i> </span>
                  </a>
                </div>
              </div>
            </div>
            <img src="/home_6/assets/img/symbol_2.png" alt="" className="pattern" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="project-card active">
            <div className="img img-cover">
              <img src="/home_6/assets/img/proj2.png" alt="" />
            </div>
            <div className="info">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2 className="fsz-40"> This involves <br /> creating various </h2>
                </div>
                <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                  <a href="#" className="butn_arrow_circle color-000 border-0 bg-white">
                    Get A Quote <span className="arrow bg-red1 text-white"> <i className="far fa-long-arrow-right"></i> </span>
                  </a>
                </div>
              </div>
            </div>
            <img src="/home_6/assets/img/symbol_3.png" alt="" className="pattern" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects