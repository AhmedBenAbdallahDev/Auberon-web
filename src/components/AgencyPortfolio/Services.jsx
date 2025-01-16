import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/AgencyPortfolio/services.json';

function Services() {
  return (
    <div className="tc-services-style1 main-box-style1 bg-white radius-9 mx-4 my-3">
      <div className="container">
        <div className="tc-section-title-style1 mb-40">
          <h2> Our Main <span> Services </span> </h2>
        </div>
        <div className="content">
          <div className="row justify-content-between">
            {data.map(item => (
              <div className="col-lg-3" key={item.id}>
                <Link href="/inner_pages/page_services" className="service-card wow fadeInUp">
                  <div className="icon mb-50">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h5 className="fsz-20 mb-30 fw-bolder"> {item.title} </h5>
                    <p className="fsz-14 color-999 mb-20"> {item.details} </p>
                    <ul>
                      {item.list.map((list_item, i) => (
                        <li key={i}>{list_item}</li>
                      ))}
                    </ul>
                    <span className="arrow"> <i className="ti-arrow-top-right"></i> </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services