"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Static Data
import data from '@/data/ConsultingAgency/brands.json';

function Brands() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <div className="tc-brands-style7">
      <div className="container">
        <div className="brands-content">
          {data.map((item) => (
            <a href="#" className="logo wow fadeInUp slow" data-wow-delay="0.2s" key={item.dark}>
              <img src={isDark ? item.dark : item.light} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands