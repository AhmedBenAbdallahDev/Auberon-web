import React from 'react';

function TopNavbar() {
  return (
    <div className="tc-top-navbar-style9 bg-222 text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <a href="#" className="n-link pt-10 pb-10 pe-4 me-4 border-1 border-end brd-light"> <i className="fal fa-user me-1 op-3"></i> My Account </a>
            <a href="#" className="n-link pt-10 pb-10"> <i className="fal fa-truck me-1 op-3"></i> Track Order </a>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="soc-links d-inline-block">
              <a href="#" className="ms-3"> <i className="fab fa-facebook-f"></i> </a>
              <a href="#" className="ms-3"> <i className="fab fa-twitter"></i> </a>
              <a href="#" className="ms-3"> <i className="fab fa-behance"></i> </a>
              <a href="#" className="ms-3"> <i className="fab fa-youtube"></i> </a>
            </div>
            <div className="dropdown d-inline-block">
              <button className="n-link pt-10 pb-10 ps-4 ms-4 border-1 border-0 border-start brd-light dropdown-toggle bg-transparent text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#"> English </a></li>
                <li><a className="dropdown-item" href="#"> French </a></li>
                <li><a className="dropdown-item" href="#"> Arabic </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar