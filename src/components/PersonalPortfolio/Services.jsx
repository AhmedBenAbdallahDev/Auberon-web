import React from 'react';

function Services() {
  return (
    <section className="tc-services-style8 wow fadeInUp slow">
      <div className="container">
        <div className="title py-3 mb-50 border-bottom border-1 border_light d-block d-lg-none">
          <p className="fsz-14 text-uppercase color-green1"> services </p>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="title py-3 mb-50 border-bottom border-1 border_light d-none d-lg-block">
              <p className="fsz-14 text-uppercase color-green1"> services </p>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-ser1" role="tabpanel" aria-labelledby="v-pills-ser1-tab">
                <h2 className=""> Swak is a solo agency that offers a wide scale of creative services, including brand development, online marketing and lots more. </h2>
                <div className="img img-cover">
                  <img src="/home_8/assets/img/ser1.jpg" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-ser2" role="tabpanel" aria-labelledby="v-pills-ser2-tab">
                <h2> Swak is a solo agency that offers a wide scale of creative services. </h2>
                <div className="img img-cover">
                  <img src="/home_8/assets/img/ser2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 order-first order-lg-2">
            <ul className="nav nav-pills d-block" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <li className="nav-item">
                <a href="#0" className="nav-link active" id="v-pills-ser1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ser1" role="tab" aria-selected="true">
                  <i className="fal fa-long-arrow-right me-2 icon"></i> <span> User Experience Design </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#0" className="nav-link" id="v-pills-ser2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ser2" role="tab" aria-selected="false">
                  <i className="fal fa-long-arrow-right me-2 icon"></i> <span> User Interface Design </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#0" className="nav-link" id="v-pills-ser3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ser1" role="tab" aria-selected="false">
                  <i className="fal fa-long-arrow-right me-2 icon"></i> <span> Digital Prototypes </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#0" className="nav-link" id="v-pills-ser4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ser2" role="tab" aria-selected="false">
                  <i className="fal fa-long-arrow-right me-2 icon"></i> <span> Front-end and CMS </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services