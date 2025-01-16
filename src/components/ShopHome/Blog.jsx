import React from 'react';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Static Data
import data from '@/data/ShopHome/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style9">
      <div className="container">
        <div className="section-head-style9 mb-40">
          <h3 className="fsz-40"> News & Feeds </h3>
          <span className="line"></span>
          <a href="#" className="more-link"> More News <i className="fal fa-long-arrow-right ms-2"></i> </a>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-6" key={item.id}>
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src={item.image} alt="" />
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <a href="#" key={index}> {tag} </a>
                    ))}
                    <a href="#"> <i className="fal fa-clock me-1"></i> {item.date} </a>
                  </div>
                </div>
                <div className="info">
                  <h5> <a href="#" className="hover-underline"> <StatementSplitter statement={item.title} /> </a> </h5>
                  <p className="color-ccc"> {item.details} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog