"use client";
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Static Data
import data from '@/data/ConsultingAgency/blog.json';

function Blog() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="tc-blog-style7">
      <div className="container">
        <div className="section-head-style7 text-center mb-80 js-splittext-lines">
          <span className="float-text sub_font"> Insights </span>
          <h2 className="fsz-60"> Our Latest News </h2>
          <p className="fw-bold fsz-16 text-uppercase color-orange2 mb-10"> Insights </p>
        </div>
        {data.map(item => (
          <div className="blog-card wow fadeInUp slow" key={item.id}>
            <div className="row">
              <div className="col-lg-3">
                <strong className="fsz-16 text-uppercase"> {item.category} </strong>
                <p className="fsz-12 color-999"> By {item.author} </p>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0">
                <h3> <a href="#" className="fsz-30 hover-orange2"> {item.title} </a> </h3>
                <div className="text fsz-14 color-777 mt-30"> {item.details} </div>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <p className="fsz-14 color-777"> <i className="fal fa-clock me-2"></i> {item.date} </p>
              </div>
            </div>
            <div className="float-img bg-img" data-background={item.image}>
              <div className="button_su border-0 rounded-pill">
                <span className="su_button_circle bg-orange2 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-0 button_su_inner bg-white rounded-pill">
                  <span className="button_text_container fsz-14 fw-bold"> continue reading </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog