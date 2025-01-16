import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/CreativeStudio/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style2">
      <div className="container">
        <div className="content">
          <div className="title mb-100">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="fsz-45 text-uppercase fw-500 js-splittext-lines"> our <span className="color-lightGreen1"> blog </span> </h2>
              </div>
              <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                <div className="button_su">
                  <span className="su_button_circle bg-black desplode-circle"></span>
                  <Link href="/inner_pages/page_blog_masonry" className="butn text-capitalize button_su_inner hover-white">
                    <span className="button_text_container fsz-16 text-white text-uppercase"> See all blog </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {data.map(item => (
            <div className="blog-card" key={item.id}>
              <div className="img img-cover">
                <img src={item.image} alt="" />
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="sub-title">
                    <b className="fsz-16 text-uppercase"> {item.category} </b>
                    <p className="fsz-14 color-999 text-uppercase"> By {item.author} </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-title mt-4 mt-lg-0">
                    <h3 className="fsz-30 text-uppercase fw-400 mb-30"> {item.title} </h3>
                    <div className="text fsz-14 color-999"> {item.details} </div>
                  </div>
                </div>
                <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
                  <div className="date fsz-14 text-uppercase color-999"> <i className="la la-clock me-1"></i> <span> {item.date} </span> </div>
                </div>
              </div>
              <div className="button_su">
                <span className="su_button_circle bg-black desplode-circle"></span>
                <Link href="/inner_pages/page_blog_details_overlay" className="butn text-capitalize button_su_inner hover-white bg-dark border-0">
                  <span className="button_text_container fsz-16 text-white text-uppercase"> continue reading </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog