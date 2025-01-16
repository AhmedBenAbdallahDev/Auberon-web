import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark style8">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-lg-5 order-2 order-lg-first">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">Home</Link>
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
              <div className="nav-side justify-content-start d-flex d-lg-none mt-4">
                <div className="social-links">
                  <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                  <a href="#"> <i className="fab fa-twitter"></i> </a>
                  <a href="#"> <i className="fab fa-behance"></i> </a>
                  <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                </div>
                <div className="button_su border-0 ms-4">
                  <span className="su_button_circle bg-green1 desplode-circle"></span>
                  <a href="#" className="butn text-uppercase border-1 border_light border button_su_inner bg-transparent py-3 px-5">
                    <span className="button_text_container fsz-14 text-white"> download cv</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="logo-content text-lg-center">
              <a className="navbar-brand m-0" href="#">
                <img src="/home_8/assets/img/logo.png" alt="" className="dr_item" />
                <img src="/home_8/assets/img/logo_dr.png" alt="" className="lt_item" />
              </a>
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="nav-side">
              <div className="social-links">
                <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#"> <i className="fab fa-twitter"></i> </a>
                <a href="#"> <i className="fab fa-behance"></i> </a>
                <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
              </div>
              <div className="button_su border-0 ms-4">
                <span className="su_button_circle bg-green1 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-1 border_light border button_su_inner bg-transparent py-3 px-5">
                  <span className="button_text_container fsz-14 text-white"> download cv</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar