import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/CreativeAgency/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style5">
      <div className="container">
        <div className="section-title text-center js-splittext-lines">
          <p className="fsz-14 text-uppercase color-666 mb-20"> insights </p>
          <h2 className="fsz-50 mb-40"> Company news & update </h2>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="blog-card">
                <Link href="/inner_pages/page_blog_details_overlay" className="img img-cover d-block">
                  <img src={item.image} alt="" />
                </Link>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> {item.tag} </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> {item.date} </a>
                  </div>
                  <h5> <Link href="/inner_pages/page_blog_details_overlay" className="fsz-24 hover-orange1 mt-20"> {item.title} </Link> </h5>
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