"use client";
import Link from 'next/link';

function SideMenu() {
  function closeSideMenu() {
    document.querySelector("#side_menu").classList.remove("show");
    document.querySelector(".side_overlay").classList.remove("show");
  }

  return (
    <>
      <div className="side_menu style-4" id="side_menu">
        <a href="#0" className="side_menu_cls" onClick={closeSideMenu}>
          <i className="la la-times fs-3"></i>
        </a>
        <div className="content">
          <div className="logo">
            <a href="#" className="w-100">
              <img src="/home_4/assets/img/logo.png" alt="" className="lt_item" />
              <img src="/home_4/assets/img/logo_lt.png" alt="" className="dr_item" />
            </a>
          </div>
          <div className="pages_links">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><Link href="/inner_pages/page_about_us">about</Link></li>
              <li><Link href="/inner_pages/page_services">services</Link></li>
              <li><Link href="/inner_pages/page_portfolio_grid">portfolio</Link></li>
              <li><Link href="/inner_pages/page_blog_masonry">blog</Link></li>
              <li><Link href="/inner_pages/page_contact">contact</Link></li>
              <li><Link href="/inner_pages/page_product_grid">shop</Link></li>
            </ul>
          </div>
          <div className="side_foot">
            <h5> get in touch </h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="#"> <i className="la la-phone-alt me-2"></i> (+23) 5535 68 68 </a>
              </div>
              <div className="col-lg-6">
                <a href="#"> <i className="la la-envelope me-2 mt-4 mt-lg-0"></i> contact@Auberon.co </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay" onClick={closeSideMenu}></div>
    </>
  )
}

export default SideMenu