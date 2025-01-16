import React from 'react';
//= Components
import ServicesSlider from './ServicesSlider';
//= Static Data
import data from '@/data/TechLanding/services.json';

function Services() {
  return (
    <section className="tc-services-style10">
      <div className="container">
        <div className="content pt-120 pb-120">
          <div className="section-head text-center mb-30">
            <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - Services - </p>
            <h2 className="fsz-60 js-splittext-lines"> Our Services </h2>
          </div>
          <div className="row gx-5">
            {data.map(item => (
              <div className="col-lg-3" key={item.id}>
                <div className="service-card mt-50 wow fadeInUp slow">
                  <div className="icon th-80 mb-40">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="fsz-24 mb-20"> {item.title} </h3>
                    <div className="text fsz-16 color-999 lh-4">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServicesSlider />
    </section>
  )
}

export default Services