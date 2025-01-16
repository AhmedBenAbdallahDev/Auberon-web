import React from 'react';
//= Data
import data from '@/data/ModernStartup/blog.json';

function Blog() {
  return (
    <section className="tc-blog-style3">
      <div className="container-fluid">
        <div className="content">
          <div className="section-title mb-40">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="title">
                  <h6 className="fsz-14 color-666 text-uppercase mb-20"> our press </h6>
                  <h2 className="fsz-50 mb-0"> Latest from <span className="sub_font fst-italic color-blue1"> our press </span> </h2>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                <div className="button_su">
                  <span className="su_button_circle bg-light1 desplode-circle"></span>
                  <a href="#" className="butn button_su_inner bg-transparent">
                    <span className="button_text_container fsz-16 text-uppercase"> see all articles </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp slow">
            {data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="blog-card">
                  <div className="img img-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <div className="tags">
                      {item.tags.map(tag => (<a href="#" key={tag}> {tag} </a>))}
                      <a href="#"> <i className="la la-clock me-1"></i>{item.date}</a>
                    </div>
                    <h5 className="title">
                      <a href="#" className="fsz-21 mb-1 text-white"> {item.title} </a>
                    </h5>
                    <p> {item.details} </p>
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