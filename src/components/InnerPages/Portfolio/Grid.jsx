import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Portfolio/grid.json';

function Grid() {
  return (
    <section className="tc-portfolio-grid-style1 pt-120 pb-120">
      <div className="container">
        <div className="row gx-5">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="portfolio-card mb-80 wow fadeInUp slow">
                <div className="img th-400 overflow-hidden img-cover">
                  <img src={item.image} alt="" />
                </div>
                <div className="info pt-30">
                  <p className="fsz-14 text-uppercase color-999 mb-10"> {item.tags} </p>
                  <h5> <a href="#" className="fsz-24 fw-bold hover-blue1"> {item.title} </a> </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="button_su border-0 rounded-0">
            <span className="su_button_circle bg-light1 desplode-circle"></span>
            <a href="#" className="butn text-uppercase border-1 border_light border button_su_inner bg-transparent py-4 px-5 rounded-0">
              <span className="button_text_container fsz-14 color-blue1"> more works <i className="fal fa-plus ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid