import React from 'react';

function WriterCard() {
  return (
    <div className="writer-card mt-60">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="img img-cover th-200">
            <img src="/inner_pages/assets/img/team/team9.png" alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="info">
            <small className="fsz-12 color-777 mb-2"> Written by </small>
            <h3 className="fsz-35"> Hilixer D. Helson </h3>
            <div className="text fsz-14 color-777 mt-15">
              Getting fast initial render with streaming server-side rendering, efficient component-level updates and state transitions, while also setting up a performant loading and bundling strategy.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriterCard