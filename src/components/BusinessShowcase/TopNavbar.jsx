import React from 'react';

function TopNavbar() {
  return (
    <div className="top-navbar-style6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="links">
              <a href="#"> info@webmail.com </a>
              <span className="icon mx-3"> &gt; </span>
              <a href="#"> +999 888 777 00 </a>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
            <div className="links">
              <a href="#"> Opening Hours </a>
              <span className="icon mx-3"> &gt; </span>
              <a href="#"> 08 AM - 10 PM </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar