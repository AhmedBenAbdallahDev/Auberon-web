import React from 'react';
//= Static Data
import data from '@/data/CreativeAgency/services.json';

function Services() {
  return (
    <section className="tc-services-style5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70 js-splittext-lines">
              <p className="fsz-14 text-uppercase color-666 mb-20"> services </p>
              <h2 className="fsz-50 mb-40"> We produce quality solutions </h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row gx-0">
            {data.map(item => (
              <div className="col-lg-3" key={item.id}>
                <div className="service-card wow fadeInLeft slow">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h5 className="fsz-22 mb-30"> {item.title} </h5>
                    <div className="text fsz-16 color-999">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services