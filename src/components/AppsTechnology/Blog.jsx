import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/AppsTechnology/blog.json';
import StatementSplitter from '../Common/StatementSplitter';

function Blog() {
  const headPost = data[0];
  const posts = data.slice(1);

  return (
    <section className="tc-blog-style4">
      <div className="container">
        <div className="title text-center">
          <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20"> Insights </p>
          <h2 className="fsz-60 mb-80"> Company insights </h2>
        </div>
        <div className="content wow fadeInUp slow">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-post pe-lg-3">
                <div className="tags mb-20">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <div className="d-flex">
                        <a href="#" className="me-1"> {headPost.tag} </a>
                        <a href="#"> <i className="la la-clock"></i> {headPost.date} </a>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon-35 rounded-circle overflow-hidden img-cover ms-auto">
                        <img src={headPost.picture} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/inner_pages/page_blog_details" className="img img-cover d-block">
                  <img src={headPost.image} alt="" />
                </Link>
                <div className="info">
                  <p className="color-999 mb-10"> By <span className="text-white"> {headPost.author} </span>  </p>
                  <h4 className="fsz-30 lh-2"> <Link href="/inner_pages/page_blog_details"> <StatementSplitter statement={headPost.title} /> </Link> </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sub-posts ps-lg-3">
                {posts.map(post => (
                  <div className="sub-post" key={post.id}>
                    <div className="row gx-0">
                      <div className="col-3">
                        <Link href="/inner_pages/page_blog_details" className="img img-cover d-block">
                          <img src={post.image} alt="" />
                        </Link>
                      </div>
                      <div className="col-9">
                        <div className="info ps-4">
                          <div className="tags mb-15">
                            <div className="d-flex">
                              <a href="#" className="me-1"> {post.tag} </a>
                              <a href="#"> <i className="la la-clock"></i> {post.date} </a>
                            </div>
                          </div>
                          <h5 className="fsz-24"> <Link href="/inner_pages/page_blog_details"> {post.title} </Link> </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog