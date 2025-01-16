import React from 'react';
//= Static Data
import data from '@/data/CreativeAgency/awards.json';

function Awards() {
  return (
    <section className="tc-awards-style5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70 js-splittext-lines">
              <p className="fsz-14 text-uppercase color-666 mb-20"> awards </p>
              <h2 className="fsz-50 mb-40"> Multiple rewards </h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title-row d-none d-lg-block js-splittext-lines">
            <div className="row">
              <div className="col-lg-3">
                <p> hosted </p>
              </div>
              <div className="col-lg-7">
                <p> Award </p>
              </div>
              <div className="col-lg-2 text-lg-end">
                <p> year </p>
              </div>
            </div>
          </div>
          {data.map(item => (
            <a href="#" className="card-row js-splittext-lines" key={item.id}>
              <div className="row">
                <div className="col-lg-3">
                  <p className="fsz-16 text-uppercase"> {item.host} </p>
                </div>
                <div className="col-lg-4 mt-3 mt-lg-0">
                  <h6 className="fsz-18 fw-600"> {item.award} </h6>
                </div>
                <div className="col-lg-3">
                  <div className="img">
                    <img src="/home_5/assets/img/reward.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 mt-3 mt-lg-0 text-lg-end">
                  <p className="fsz-16"> {item.year} </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-80">
          <div className="button_su border-0">
            <span className="su_button_circle bg-orange1 desplode-circle"></span>
            <a href="#" className="butn text-capitalize border-1 border-dark border button_su_inner bg-transparent hover-white py-3 px-5">
              <span className="button_text_container fsz-14"> Show More <i className="fal fa-chevron-down ms-1"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards