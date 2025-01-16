import React from 'react';
//= Static Data
import data from '@/data/InnerPages/AboutUs/vision.json';

function Vision() {
  return (
    <section className="tc-vision-style1 pt-120 pb-60">
      <div className="container">
        <div className="row gx-lg-5">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="vision-card mb-80 wow fadeInUp slow" data-wow-delay="0s">
                <h4 className="fsz-24 fw-bold mb-20"> {item.title} </h4>
                <p className="text fsz-18 color-666"> {item.details} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vision