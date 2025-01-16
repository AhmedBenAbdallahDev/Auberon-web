import React from 'react';

function PopularFeed() {
  return (
    <div className="widget-box widget-popular">
      <div className="widget-title">
        <h6 className="fsz-20 p-0 fw-bold"> Popular Feeds </h6>
      </div>
      <div className="posts-content">
        <div className="item">
          <div className="img img-cover">
            <img src="/inner_pages/assets/img/blog/blog1-1.jpg" alt="" />
          </div>
          <div className="inf">
            <a href="#" className="fsz-16 fw-bold hover-blue1 mb-10 title"> Having education in an area helps </a>
            <a href="#" className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-1"></i> 24th August 2023 </a>
          </div>
        </div>
        <div className="item">
          <div className="img img-cover">
            <img src="/inner_pages/assets/img/blog/blog2-2.jpg" alt="" />
          </div>
          <div className="inf">
            <a href="#" className="fsz-16 fw-bold hover-blue1 mb-10 title"> People think, feel, & behave in a way </a>
            <a href="#" className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-1"></i> 24th August 2023 </a>
          </div>
        </div>
        <div className="item">
          <div className="img img-cover">
            <img src="/inner_pages/assets/img/blog/blog3-3.jpg" alt="" />
          </div>
          <div className="inf">
            <a href="#" className="fsz-16 fw-bold hover-blue1 mb-10 title"> That contributes to their success </a>
            <a href="#" className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-1"></i> 24th August 2023 </a>
          </div>
        </div>
        <div className="item">
          <div className="img img-cover">
            <img src="/inner_pages/assets/img/blog/blog5-5.jpg" alt="" />
          </div>
          <div className="inf">
            <a href="#" className="fsz-16 fw-bold hover-blue1 mb-10 title"> Improves not only their personal </a>
            <a href="#" className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-1"></i> 24th August 2023 </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularFeed