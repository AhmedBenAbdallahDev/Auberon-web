"use client";
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Navbar() {
  const params = useSearchParams();
  const theme = params.get('mode');
  const isDark = theme === 'dark';

  function openSideMenu(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle("active");
    document.querySelector("#side_menu").classList.toggle("show");
    document.querySelector(".side_overlay").classList.toggle("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark style7">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={`/home_7/assets/img/${isDark ? 'logo_wh' : 'logo'}.png`} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-content w-100">
          <div className="top-nav">
            <div className="row">
              <div className="col-lg-6">
                <p> Opening Hours: 10:00 AM - 08:00 PM </p>
              </div>
              <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                <a href="#"> info@webmail.com </a>
                <span className="icon mx-2 fsz-10"> <i className="fal fa-chevron-right"></i> </span>
                <a href="#"> +999 888 777 00 </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/inner_pages/page_portfolio_grid">works</Link>
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
            <div className="social-side">
              <div className="links">
                <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#"> <i className="fab fa-twitter"></i> </a>
                <a href="#"> <i className="fab fa-behance"></i> </a>
                <a href="#"> <i className="fab fa-youtube"></i> </a>
              </div>
              <a href="#" className="menu-btn side_menu_btn" onClick={openSideMenu}> <i className="fas fa-th"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar