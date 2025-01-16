import React from 'react';
//= Static Data
import data from '@/data/PersonalPortfolio/awards.json';

function Awards() {
  return (
    <section className="tc-awards-style8">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="title wow fadeInUp slow" data-wow-delay="0.1s">
              <span className="icon"> <img src="/home_8/assets/img/award_icon.png" alt="" /> </span>
              <h2 className="fsz-60"> Get reward for design. </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content wow fadeInUp slow" data-wow-delay="0.3s">
              <div className="title-row d-none d-lg-block ">
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
                <a href="#" className="card-row" key={item.id}>
                  <div className="row">
                    <div className="col-lg-3">
                      <p className="fsz-15 text-uppercase"> {item.host} </p>
                    </div>
                    <div className="col-lg-5 mt-3 mt-lg-0">
                      <p className="fsz-17 fw-600"> {item.award} </p>
                    </div>
                    <div className="col-lg-2">
                      <div className="img">
                        <img src="/home_8/assets/img/reward.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-2 mt-3 mt-lg-0 text-lg-end">
                      <p className="fsz-16"> {item.year} </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="button_su border-0 mt-70">
              <span className="su_button_circle bg-green1 desplode-circle"></span>
              <a href="#" className="butn text-capitalize border-1 border_light border button_su_inner bg-transparent py-3 px-5">
                <span className="button_text_container fsz-14 text-white"> Show More <i className="fal fa-chevron-down ms-1"></i> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards