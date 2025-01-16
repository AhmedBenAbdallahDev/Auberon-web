import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar tc-navbar-style9 navbar-expand-lg navbar-light">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-lg-5 order-2 order-lg-first">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/inner_pages/page_product_grid">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/inner_pages/page_contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/inner_pages/page_blog_grid">news</Link>
                </li>
              </ul>
              <div className="nav-side justify-content-start d-flex d-lg-none mt-4">

              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="logo-content text-lg-center">
              <a className="navbar-brand m-0" href="#">
                <img src="/home_9/assets/img/logo.png" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="nav-side">
              <div className="text-item text-end pe-3">
                <p className="color-999"> Support Email </p>
                <h6 className="fsz-14"> info@Swak-shop.com </h6>
              </div>
              <div className="shop-icons">
                <a href="#" className="link-basket"> <i className="fal fa-shopping-basket"></i> <span className="num">2</span> </a>
                <a href="#" className="link-heart"> <i className="fal fa-heart"></i> </a>
                <a href="#" className="link-search"> <i className="fal fa-search"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar