import React from 'react';
//= Components
import TextSliders from './TextSliders';
import StatementSplitter from '../Common/StatementSplitter';
//= Static Data
import data from '@/data/CreativeStudio/services.json';

function Services() {
  return (
    <section className="tc-services-style2">
      <div className="container">
        <div className="title text-center mb-100">
          <h2 className="fsz-45 text-uppercase fw-500 js-splittext-lines"> our <span className="color-lightGreen1"> services </span> </h2>
        </div>
        <div className="content">
          <div className="row gx-0">
            {data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div className="service-card wow fadeInUp slow" data-wow-delay={`${index * 0.3 + 0.3}s`}>
                  <div className="sub-title">
                    <p className="fsz-16 text-uppercase lh-3"> <StatementSplitter statement={item.title} /> </p>
                    <span className="icon"> <i className={`la la-${item.icon}`}></i> </span>
                  </div>
                  <a href="#" className="img img-cover d-block">
                    <img src={item.image} alt="" />
                  </a>
                  <h3 className="tags fsz-30 fw-300 mt-30">
                    {item.tags.map((tag, i) => (
                      <a href="#" className="hover-underline" key={i}> {tag} </a>
                    ))}
                  </h3>
                  <span className="arrow fsz-30 mt-90"> <i className="ti-arrow-top-right"></i> </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-90">
          <div className="button_su">
            <span className="su_button_circle bg-black desplode-circle"></span>
            <a href="#" className="butn text-capitalize button_su_inner hover-white">
              <span className="button_text_container fsz-16 text-white text-uppercase"> See all services </span>
            </a>
          </div>
        </div>
      </div>
      <TextSliders />
    </section>
  )
}

export default Services