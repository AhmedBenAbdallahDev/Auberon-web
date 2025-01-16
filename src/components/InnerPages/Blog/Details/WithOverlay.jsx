import React from 'react';
//= Components
import ContentWithOverlay from './ContentWithOverlay';
import Tags from './Tags';
import NextPrev from './NextPrev';
import WriterCard from './WriterCard';
import CommentsCards from './Comments/Cards';
import CommentsForm from './Comments/Form';
import Widgets from '../Widgets';

function Details() {
  return (
    <section className="tc-blog-details-overlay-style1">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-8">
            <div className="main-post-img-overlay">
              <div className="img img-cover">
                <img src="/inner_pages/assets/img/blog/blog_overlay.jpg" alt="" />
              </div>
              <div className="info" data-speed="1" data-lag="0.2">
                <p className="fsz-14 text-uppercase mb-15"> agency </p>
                <h2 className="fsz-50"> Life as a ui & ux designer in new york </h2>
              </div>
              <div className="btm-info">
                <a href="#"> <i className="fal fa-eye me-1"></i> <span> 100 Views </span> </a>
                <a href="#"> <i className="fal fa-comments me-1"></i> <span> 30 Comments </span> </a>
                <a href="#"> <i className="fal fa-calendar-alt me-1"></i> <span> 100 24th August 2023 </span> </a>
              </div>
            </div>
            <div className="main-post">
              {/* Content */}
              <ContentWithOverlay />
              {/* Tags */}
              <Tags />
              {/* Next & Prev Posts */}
              <NextPrev />
              {/* Writer */}
              <WriterCard />
              {/* Comments */}
              <CommentsCards />
              <CommentsForm />
            </div>
          </div>
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </section>
  )
}

export default Details