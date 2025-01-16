"use client";
import React from 'react';
import LightGallery from 'lightgallery/react';
//= Static Data
import data from '@/data/PersonalPortfolio/portfolio.json';

function Portfolio() {
  function openGallery(event, index) {
    event.preventDefault();
    let items = document.querySelector('.lg-react-element').children;
    items[index].click();
  }

  return (
    <section className="tc-portfolio-style8">
      <div className="container">
        <div className="title py-3 mb-30 border-bottom border-1 border_light">
          <p className="fsz-14 text-uppercase color-green1"> portfolio </p>
        </div>
        <h2 className="fsz-50 mb-80"> My creative works </h2>
        <div className="content">
          <div className="row gx-0">
            {data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <a href={item.image} className="portfolio-card wow fadeInUp slow" data-wow-delay="0.1s" onClick={(e) => openGallery(e, index)}>
                  <div className="img img-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <h4 className="fsz-30 sub_font_2"> {item.title} </h4>
                    <p> {item.tags} </p>
                  </div>
                </a>
              </div>
            ))}
            <div className="col-lg-4">
              <a href="#" className="portfolio-link wow fadeInUp slow" data-wow-delay="0.3s">
                <span className="fsz-18"> See more work <i className="ti-arrow-top-right ms-3"></i> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <LightGallery speed={500}>
        {data.map((item, index) => (
          <img src={item.image} key={index} alt="" />
        ))}
      </LightGallery>
    </section>
  )
}

export default Portfolio