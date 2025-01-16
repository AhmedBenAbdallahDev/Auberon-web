"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Static Data
import data from '@/data/PersonalPortfolio/partners.json';

function Partners() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <div className="tc-partners-style8">
      <div className="container">
        <div className="content">
          <div className="row gx-3">
            {data.map(item => (
              <div className="col-lg-3" key={item.id}>
                <a href="#" className="partner-card wow fadeInUp">
                  <div className="logo">
                    <img src={isDark ? item.darkImage : item.lightImage} alt="" className="main-img" />
                  </div>
                  <div className="foot-inf">
                    <p> {item.title} </p>
                    <span className="icon"> <i className="fal fa-plus"></i> </span>
                  </div>
                  <div className="info">
                    <p> {item.text} </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners