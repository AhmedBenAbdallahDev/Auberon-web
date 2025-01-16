"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
//= Scripts
import isInView from '@/common/isInView';
//= Static Data
import data from '@/data/AgencyPortfolio/partners.json';

function Partners() {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    isInView({
      selector: ".numbs",
      callback() {
        setisVisible(true);
      },
      whenOutOfView() {
        setisVisible(false);
      }
    })
  }

  return (
    <section className="tc-partners-style1">
      <div className="container">
        <div className="tc-section-title-style1 mb-90">
          <h2> Partned with <span> 120+ Brands </span> </h2>
        </div>
        <div className="content">
          <div className="row gx-3">
            {data.map(item => (
              <div className="col-lg-3" key={item.id} data-wow-delay="0.2s">
                <a href="#" className="partner-card wow fadeInUp">
                  <div className="logo">
                    <img src={item.imageLight} alt="" className="main-img lt_item" />
                    <img src={item.imageDark} alt="" className="main-img dr_item" />
                  </div>
                  <div className="foot-inf">
                    <p> {item.title} </p>
                    <span className="icon"> <i className="la la-plus"></i> </span>
                  </div>
                  <div className="info">
                    <p> {item.details} </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="numbs wow fadeInUp">
            <div className="numb-card">
              <h2> <span className="counter"> {isVisible && <CountUp end={10} />} </span> + </h2>
              <p> Years of <br /> Experience </p>
            </div>
            <div className="numb-card">
              <h2> <span className="counter"> {isVisible && <CountUp end={60} />} </span> </h2>
              <p> awards winning <br /> accquired </p>
            </div>
            <div className="numb-card">
              <h2> <span className="counter"> {isVisible && <CountUp end={45} />} </span> + </h2>
              <p> multidisciplinary <br /> designers and managers </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners