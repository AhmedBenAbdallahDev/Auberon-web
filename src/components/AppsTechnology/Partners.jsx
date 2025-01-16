"use client";
import React from 'react';
//= Static Data
import data from '@/data/AppsTechnology/partners.json';

function Partners() {
  return (
    <section className="tc-partners-style4">
      <div className="container">
        <div className="logos wow fadeInUp slow">
          {data.map(item => (
            <a href="#" className="logo" key={item.id}>
              <img src={item.light} alt="" className="lt_item" />
              <img src={item.dark} alt="" className="dr_item" />
            </a>
          ))}
        </div>
        <h6 className="text-center fsz-22 mt-50"> Trusted by <span className="color-blue1"> +150 brands </span> </h6>
      </div>
    </section>
  )
}

export default Partners