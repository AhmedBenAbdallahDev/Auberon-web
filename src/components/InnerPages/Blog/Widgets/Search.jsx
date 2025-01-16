import React from 'react';

function Search() {
  return (
    <div className="widget-box widget-search">
      <div className="widget-title">
        <h6 className="fsz-20 p-0 fw-bold"> Search Here </h6>
      </div>
      <form action="" className="form mt-30">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Keyword..." aria-label="Keyword..." aria-describedby="button-addon2" />
          <button className="btn bg-blue1 text-white" type="button" id="button-addon2"> <i className="fal fa-search"></i> </button>
        </div>
      </form>
    </div>
  )
}

export default Search