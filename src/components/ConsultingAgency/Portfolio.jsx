import React from 'react';
//= Static Data
import data from '@/data/ConsultingAgency/portfolio.json';

function Portfolio() {
  return (
    <section className="tc-portfolio-style7">
      <div className="container">
        <div className="section-head-style7 text-center mb-80 js-splittext-lines">
          <span className="float-text sub_font"> Portfolio </span>
          <h2 className="fsz-60"> Our Case Studies </h2>
          <p className="fw-bold fsz-16 text-uppercase color-orange2"> Portfolio </p>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-6" key={item.id}>
              <div className="project-card me-lg-5 wow fadeInUp slow">
                <div className="img img-cover">
                  <img src={item.image} alt="" />
                  <span className="arrow"> <i className="fal fa-long-arrow-right"></i> </span>
                  <span className="tag"> {item.tag} </span>
                </div>
                <div className="info">
                  <p className="color-777 mb-2"> {item.tags} </p>
                  <h4 className=""> <a href="#" className="fsz-30 hover-orange2 fsz-30"> {item.title} </a> </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="button_su border-1 border-light1 radius-3">
            <span className="su_button_circle bg-orange2 desplode-circle"></span>
            <a href="#" className="butn text-uppercase border-1 border-light1 button_su_inner bg-transparent radius-3">
              <span className="button_text_container fsz-14"> more works <i className="fal fa-plus ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio