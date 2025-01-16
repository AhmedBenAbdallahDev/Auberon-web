import React from 'react';
//= Data
import data from '@/data/ModernStartup/partners.json';

function Partners() {
  return (
    <section className="tc-partners-style3">
      <div className="container-fluid">
        <div className="title mb-60">
          <h6 className="fsz-14 color-666 text-uppercase mb-20"> partner with more 100 brands </h6>
          <h2 className="fsz-50 mb-0"> Our <span className="sub_font fst-italic color-blue1"> Partners & Clients </span> </h2>
        </div>
        <div className="logos">
          {data.map(item => (
            <div className="btn_wrapper d-inline-block" key={item}>
              <a href="#" className="logo btn-item">
                <img src={item} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners