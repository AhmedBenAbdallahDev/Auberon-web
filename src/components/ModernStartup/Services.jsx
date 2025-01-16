import React from 'react';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Static Data
import data from '@/data/ModernStartup/services.json';

function Services() {
  return (
    <section className="tc-services-style3">
      <div className="container-fluid">
        <div className="title mb-40">
          <h6 className="fsz-14 color-666 text-uppercase mb-20"> services that Swak provide </h6>
          <h2 className="fsz-50 mb-0"> Digital solutions for <span className="sub_font fst-italic color-blue1"> your business </span> </h2>
        </div>
        <div className="content">
          <div className="row gx-5">
            {data.map((item, index) => (
              <div className={`col-lg-4 ${index !== data.length - 1 ? 'border-end border-1 brd-gray' : ''} mt-50`} key={item.id}>
                <div className="service-card wow fadeInUp slow">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="fsz-30 mb-30"> <StatementSplitter statement={item.title} /> </h3>
                    <ul>
                      {item.list.map((list_item) => (
                        <li key={list_item}>
                          <a href="#"> {list_item} </a>
                        </li>
                      ))}
                    </ul>
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