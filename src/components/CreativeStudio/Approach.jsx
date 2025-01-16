import React from 'react';
//= Static Data
import data from '@/data/CreativeStudio/approach.json';

function Approach() {
  return (
    <section className="tc-approach-style2">
      <div className="container">
        <div className="title text-center mb-100">
          <h2 className="fsz-45 text-uppercase fw-500 js-splittext-lines"> our <span className="color-lightGreen1"> approach </span> </h2>
        </div>
        <div className="content">
          <div className="row gx-0">
            {data.map((item, index) => (
              <div className="col-lg-3" key={item.id} data-wow-delay={`${index * 0.2}s`}>
                <a href="#" className="approach-card wow zoomIn slow">
                  <h5> {item.title} </h5>
                  <div className="icon">
                    <img src={item.image} alt="" />
                  </div>
                  <p> {item.details} </p>
                  <span className="num"> {item.numb} </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach