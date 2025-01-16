import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/AgencyPortfolio/portfolio.json';


function Portfolio() {
  return (
    <section className="tc-portfolio-style1">
      <div className="container">
        <div className="tc-section-title-style1 mb-15">
          <h2> Featured <span> Works </span> </h2>
        </div>
        <div className="content">
          <div className="row">
            {data.map(item => (
              <div className={`col-lg-${item.width}`} key={item.id}>
                <Link href={item.link} className={`portfolio-card ${item.width === 4 ? 'sm' : item.width === 12 ? 'lg' : 'md'}-card`}>
                  <div className="img img-cover">
                    <img src={item.frontImage} alt="" />
                    <img src={item.backImage} alt="" />
                    <span className="icon"> <i className="ti-arrow-top-right"></i> </span>
                  </div>
                  <div className="info pt-40">
                    <h3 className="fsz-30 mb-10"> {item.title} </h3>
                    <p className="fsz-14 color-999"> {item.tags}  </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="button_su mt-90">
            <span className="su_button_circle desplode-circle bg-black"></span>
            <a href="#" className="butn text-capitalize button_su_inner hover-white">
              <span className="button_text_container"> See more work <i className="ti-arrow-top-right ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio