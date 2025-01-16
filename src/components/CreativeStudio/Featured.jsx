import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/CreativeStudio/featured.json';

function Featured() {
  return (
    <section className="tc-featured-style2">
      <div className="container">
        <div className="title text-center mb-100">
          <h2 className="fsz-45 text-uppercase fw-500 js-splittext-lines"> featured <span className="color-lightGreen1"> works </span> </h2>
        </div>
        <div className="content block wow fadeInUp" data-wow-delay="0.1s" data-fx="3">
          {data.map(item => (
            <Link href="/inner_pages/page_single_project.html" className="feature-item" data-img={item.image} key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-12 d-lg-none">
                    <div className="img img-cover th-230 radius-6 overflow-hidden mb-20">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <p className="fsz-16 text-uppercase text-white"> {item.title} </p>
                  </div>
                  <div className="col-lg-3">
                    <p className="fsz-16 text-uppercase color-999"> {item.tags} </p>
                  </div>
                  <div className="col-lg-6 text-lg-end">
                    <p className="year fsz-16 text-uppercase color-999"> {item.year} </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-150">
          <div className="button_su">
            <span className="su_button_circle bg-black desplode-circle"></span>
            <a href="#" className="butn text-capitalize button_su_inner hover-white">
              <span className="button_text_container fsz-16 text-white text-uppercase"> See all works </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured