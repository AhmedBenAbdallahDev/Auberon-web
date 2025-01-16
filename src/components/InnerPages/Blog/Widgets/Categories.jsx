import React from 'react';

function Categories() {
  return (
    <div className="widget-box widget-categories">
      <div className="widget-title">
        <h6 className="fsz-20 p-0 fw-bold"> Categories </h6>
      </div>
      <div className="cat-content">
        <a href="#" className="cat-item"> <span> Business </span> <span className="num"> 26 </span> </a>
        <a href="#" className="cat-item"> <span> Consultant </span> <span className="num"> 30 </span> </a>
        <a href="#" className="cat-item"> <span> Creative </span> <span className="num"> 71 </span> </a>
        <a href="#" className="cat-item"> <span> UI/UX </span> <span className="num"> 56 </span> </a>
        <a href="#" className="cat-item"> <span> Technology </span> <span className="num"> 60 </span> </a>
      </div>
    </div>
  )
}

export default Categories