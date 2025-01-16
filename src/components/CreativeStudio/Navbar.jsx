import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/home_2/assets/img/logo_home2.png" alt="" className="logo dr_item" />
          <img src="/home_2/assets/img/logo_home2_dr.png" alt="" className="logo lt_item" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/inner_pages/page_services">services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_portfolio_showcase">works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_about_us">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_blog_grid">news</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_contact">contact</Link>
            </li>
          </ul>
          <div className="dropdown">
            <button className="border-0 bg-transparent p-0 text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className="ti-world me-1"></i> ENG
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">FR</a></li>
              <li><a className="dropdown-item" href="#">AR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar