import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Portfolio/showcase.json';

function Showcase() {
  return (
    <section className="tc-portfolio-masonry-style1 pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="portfolio-card mb-30 wow fadeInUp slow">
                <div className="img overflow-hidden img-cover">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <div className="cont">
                    <p className="fsz-14 text-uppercase mb-10"> {item.tags} </p>
                    <h5> <a href="#" className="fsz-24 fw-600 hover-underline"> {item.title} </a> </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-50">
          <div className="button_su border-0 rounded-pill">
            <span className="su_button_circle bg-000 desplode-circle"></span>
            <a href="#" className="butn text-uppercase border-1 border_light border button_su_inner bg-blue1 py-3 px-5 rounded-pill">
              <span className="button_text_container fsz-14 text-white"> send message </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase