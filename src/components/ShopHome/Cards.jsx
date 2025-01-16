import React from 'react';
//= Static Data
import data from '@/data/ShopHome/cards.json';

function Cards() {
  return (
    <div className="features-cards">
      {data.map(item => (
        <a href="#0" className="feat-card wow fadeInUp slow" key={item.id}>
          <div className="icon">
            <img src={item.image} alt="" />
          </div>
          <div className="info mt-30">
            <h6 className="fsz-16 mb-1"> {item.title} </h6>
            <p className="color-777 mb-0"> {item.items} Items </p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Cards