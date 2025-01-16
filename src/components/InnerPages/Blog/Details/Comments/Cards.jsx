import React from 'react';

function Cards() {
  return (
    <div className="comments mt-50 pb-20">
      <h3 className="fsz-26"> 03 Comments </h3>
      <div className="comment-card">
        <div className="img img-cover">
          <img src="/inner_pages/assets/img/team/team1.jpg" alt="" />
        </div>
        <div className="info">
          <div className="title">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <h6 className="fsz-18 fw-bold"> Rosalina Kelian </h6>
                <p className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-2"></i> 24th August 2023 </p>
              </div>
              <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
                <a href="#" className="reply-btn"> <i className="far fa-reply me-1"></i> reply </a>
              </div>
            </div>
          </div>
          <div className="text fsz-14 color-777 mt-30">
            For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful — dare we say, even fun — to develop and maintain. Regardless of whether you’re ing up a storefront for a new merchant.
          </div>
        </div>
      </div>
      <div className="comment-card reply-card">
        <div className="img img-cover">
          <img src="/inner_pages/assets/img/team/team6.png" alt="" />
        </div>
        <div className="info">
          <div className="title">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <h6 className="fsz-18 fw-bold"> Rosalina Kelian </h6>
                <p className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-2"></i> 24th August 2023 </p>
              </div>
              <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
                <a href="#" className="reply-btn"> <i className="far fa-reply me-1"></i> reply </a>
              </div>
            </div>
          </div>
          <div className="text fsz-14 color-777 mt-30">
            Building a customer experience that will be visited by millions, the goal for Hydrogen is to eliminate undifferentiated and gnarly technical plumbing and enable you to start fast and focus on delivering merchant value.
          </div>
        </div>
      </div>
      <div className="comment-card">
        <div className="img img-cover">
          <img src="/inner_pages/assets/img/team/team3.png" alt="" />
        </div>
        <div className="info">
          <div className="title">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <h6 className="fsz-18 fw-bold"> Arista Williamson </h6>
                <p className="fsz-14 color-777"> <i className="fal fa-calendar-alt me-2"></i> 24th August 2023 </p>
              </div>
              <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
                <a href="#" className="reply-btn"> <i className="far fa-reply me-1"></i> reply </a>
              </div>
            </div>
          </div>
          <div className="text fsz-14 color-777 mt-30">
            Unlocking such features and making them all work nicely together required that we work hands-on with React core team on helping define and prototype server components; Vite ecosystem on server-side streaming; Google’s Aurora team on integrating conformance.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards