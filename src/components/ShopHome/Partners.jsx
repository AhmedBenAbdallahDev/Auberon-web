"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
//= Static Data
import data from '@/data/ShopHome/partners.json';

function Partners() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  return (
    <div className="tc-partners-style9 wow fadeInUp slow">
      <div className="logos">
        {data.map((item, index) => (
          <a href="#" className="logo" key={index}>
            <img src={isDark ? item.dark : item.light} alt="" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Partners