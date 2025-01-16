import React from 'react';

function Member() {
  return (
    <section className="tc-team-member-info-style1 pt-120">
      <div className="team-member-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img th-575 overflow-hidden img-cover mb-4 mb-lg-0">
                <img src="/inner_pages/assets/img/team/team_info1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="info">
                <h6 className="fsz-16 color-blue1 text-uppercase mb-15"> head of dea </h6>
                <h2 className="fsz-50 mb-15"> Alonso D. Dowson </h2>
                <div className="text fsz-16 color-666"> Before starting your agency, it's important to identify the target <br /> market you want to serve. </div>
                <ul className="color-666 mt-20 lh-7">
                  <li> <span className="color-000 text-uppercase"> EXPERIENCE: </span> 7 Years </li>
                  <li> <span className="color-000 text-uppercase"> EMAIL: </span> webmail@mail.com  </li>
                  <li> <span className="color-000 text-uppercase"> PHONE: </span> +9 888 777 6 </li>
                  <li> <span className="color-000 text-uppercase"> FAX: </span> +9 888 777 6 </li>
                </ul>
                <div className="social-links">
                  <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                  <a href="#"> <i className="fab fa-twitter"></i> </a>
                  <a href="#"> <i className="fab fa-behance"></i> </a>
                  <a href="#"> <i className="fab fa-youtube"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-member-progress mt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="progress-info">
                <h6 className="fsz-16 color-blue1 text-uppercase mb-15"> experience </h6>
                <h2 className="fsz-50 mb-15"> Personal experience </h2>
                <div className="text fsz-16 color-666 mb-40"> Fortune 500 companies are eager to work with us. The product <br /> created with us are used by millions. </div>
                <div className="progress-card">
                  <div className="progress-title">
                    <strong> Digital Product </strong>
                    <span className="perc"> 62% </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "63%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="progress-title">
                    <strong> Core Solutions </strong>
                    <span className="perc"> 80% </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="progress-title">
                    <strong> 24/7 Support </strong>
                    <span className="perc"> 70% </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "62%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img th-575 overflow-hidden img-cover mt-4 mt-lg-0">
                <img src="/inner_pages/assets/img/team/team_progress.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Member