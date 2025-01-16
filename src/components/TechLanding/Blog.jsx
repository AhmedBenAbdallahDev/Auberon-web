import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/TechLanding/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style10">
      <div className="container">
        <div className="section-head mb-80">
          <p className="fsz-14 text-uppercase color-999 mb-10 ltspc-2"> - news feeds </p>
          <h2 className="fsz-60 js-splittext-lines"> Company Insights </h2>
        </div>
        <div className="blog-content block" data-fx="3">
          {data.map(item => (
            <Link href="/inner_pages/page_blog_list" className="blog-card" data-img={item.image} key={item.id}>
              <div className="row gx-0 justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="img img-cover d-lg-none">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <div className="tags-date">
                      <span className="tag"> {item.tag} </span>
                      <span className="date"> {item.date} </span>
                    </div>
                    <h4 className="title">{item.title} </h4>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="text-lg-end mt-4 mt-lg-0">
                    <span className="butn">
                      <span> Learn More <i className="fal fa-angle-right ms-2"></i> </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog