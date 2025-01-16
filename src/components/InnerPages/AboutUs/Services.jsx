import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Static Data
import data from '@/data/InnerPages/AboutUs/services.json';

function Services() {
  return (
    <section className="tc-about-services-style1">
      <div className="container">
        <div className="title text-center mb-30 js-splittext-lines">
          <h6 className="fsz-16 color-blue1 text-uppercase mb-20"> our services </h6>
          <h2 className="fsz-50"> We help to build and transform <br /> digital products </h2>
        </div>
        <div className="content">
          <div className="row gx-5">
            {data.map((item, index) => (
              <div className={`col-lg-4 ${index !== data.length - 1 ? 'border-end border-1 brd-gray wow fadeInUp slow' : ''} mt-50`} key={item.id}>
                <div className="service-card">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="fsz-30 mb-30 fw-500"> <StatementSplitter statement={item.title} /> </h3>
                    <ul>
                      {item.list.map((list_item, i) => (
                        <li key={i}> <a href="#"> {list_item} </a> </li>
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