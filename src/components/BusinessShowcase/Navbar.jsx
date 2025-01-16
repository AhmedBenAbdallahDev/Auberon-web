import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style6">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/home_6/assets/img/logo.png" alt="" className="lt_item" />
          <img src="/home_6/assets/img/logo_lt.png" alt="" className="dr_item" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#0">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_portfolio_showcase">works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_about_us">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_blog_masonry">news</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_contact">contact</Link>
            </li>
          </ul>
          <div className="button_su border-0">
            <span className="su_button_circle bg-red1 desplode-circle"></span>
            <Link href="/inner_pages/page_contact" className="butn text-capitalize border-1 border-dark border button_su_inner bg-transparent hover-white py-3 px-5">
              <span className="button_text_container fsz-14"> Start Project <i className="ti-arrow-top-right ms-1"></i></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar