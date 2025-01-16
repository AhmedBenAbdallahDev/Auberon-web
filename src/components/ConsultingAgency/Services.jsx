import React from 'react';
//= Static Data
import data from '@/data/ConsultingAgency/services.json';

function Services() {
  return (
    <section className="tc-services-style7">
      <div className="container">
        <div className="section-head-style7 text-center mb-40 js-splittext-lines">
          <span className="float-text sub_font"> Services </span>
          <h2 className="fsz-60"> What We Do </h2>
          <p className="fw-bold fsz-16 text-uppercase color-orange2"> services </p>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="service-card wow fadeInUp slow">
                <div className="icon icon-80 mb-40">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <h5 className="fsz-26 mb-20"> {item.title} </h5>
                  <div className="text fsz-16 color-777 mb-30"> {item.details} </div>
                  <a href="#" className="link"> <span> read more </span> <i className="fal fa-long-arrow-right icon"></i> </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services