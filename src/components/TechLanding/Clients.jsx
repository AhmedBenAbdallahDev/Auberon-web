"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Static Data
import data from '@/data/TechLanding/clients.json';

function Clients() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <section className="tc-clients-style10">
      <div className="container">
        <div className="section-head mb-70">
          <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - trusted by <span className="color-000"> 2000+ users </span> </p>
          <h2 className="fsz-60 js-splittext-lines"> Uncounted Users <br /> From All Kind Of Positons </h2>
        </div>
        <div className="logos">
          {data.map((item, index) => (
            <a href="#" className="logo btn_wrapper" key={index}>
              <img src={isDark ? item.dark_logo : item.light_logo} alt="" className="btn-item" />
            </a>
          ))}
          <a href="#" className="logo-link btn_wrapper"> <span className="btn-item"> next <br /> will be your <br />  <i className="fal fa-long-arrow-right"></i> </span> </a>
        </div>
      </div>
    </section>
  )
}

export default Clients