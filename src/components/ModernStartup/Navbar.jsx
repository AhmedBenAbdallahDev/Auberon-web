import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/home_3/assets/img/logo.png" alt="" className="logo lt_item" />
          <img src="/home_3/assets/img/logo_lt.png" alt="" className="logo dr_item" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/inner_pages/page_services">services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_portfolio_grid">works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_about_us">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_blog_list">news</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/inner_pages/page_contact">contact</Link>
            </li>
          </ul>
          <Link href="/inner_pages/page_contact" className="text-uppercase text-decoration-underline"> <i className="la la-envelope fsz-16 text-decoration-underline"></i> get quote </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar