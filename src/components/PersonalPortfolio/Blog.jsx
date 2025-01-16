import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/PersonalPortfolio/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style8">
      <div className="container">
        <div className="title py-3 mb-30 border-bottom border-1 border_light">
          <p className="fsz-14 text-uppercase color-green1"> news </p>
        </div>
        <h2 className="fsz-50 mb-40"> News feeds </h2>
        <div className="content">
          <div className="row">
            {data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="blog-card mt-30 wow fadeInUp slow" data-wow-delay="0.1s">
                  <Link href="/inner_pages/page_blog_details_overlay" className="img img-cover th-250 d-block">
                    <img src={item.image} alt="" />
                  </Link>
                  <div className="info pt-40">
                    <div className="date text-uppercase fw-300 color-999">
                      <span className="color-green1"> {item.tag} </span> <span className="mx-3"> / </span> {item.date}
                    </div>
                    <h5>
                      <Link href="/inner_pages/page_blog_details_overlay" className="hover-green1 fsz-24 sub_font_2 mt-15">
                        {item.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog