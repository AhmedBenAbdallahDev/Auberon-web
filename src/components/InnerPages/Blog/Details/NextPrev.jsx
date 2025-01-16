import React from 'react';

function NextPrev() {
  return (
    <div className="next-prev-post">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="item">
            <p className="fsz-14 color-777 mb-0"> Prev Post </p>
            <h3> <a href="#" className="fsz-28 fw-bold hover-blue1"> Tips On Minimalist </a> </h3>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="icon icon-40 mx-auto my-5 my-lg-0">
            <img src="/inner_pages/assets/img/icons/ico7.svg" alt="" />
          </div>
        </div>
        <div className="col-lg-5 text-lg-end">
          <div className="item">
            <p className="fsz-14 color-777 mb-0"> Next Post </p>
            <h3> <a href="#" className="fsz-28 fw-bold hover-blue1"> Less Is More </a> </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextPrev