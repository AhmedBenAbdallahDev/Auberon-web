import React from 'react'

function Header() {
  return (
    <header className="tc-header-style1 pb-70">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-10">
            <h1 className=""> Design. Development. <span className="fst-italic color-999 fw-500 fm-playfair"> Mastership </span> </h1>
            <p className="fsz-22 mt-60"> We design and develop exceptional digital products and services, <br /> eCommerce, and brand communication solutions. </p>
            <div className="tags mt-90">
              <a href="#" className="butn main-hover-black fsz-24 me-3 mt-4 mt-lg-0"> <span> <i className="la la-crown me-2"></i> Branding </span> </a>
              <a href="#" className="butn main-hover-black fsz-24 me-3 mt-4 mt-lg-0"> <span> <i className="la la-bezier-curve me-2"></i> Interaction </span> </a>
              <a href="#" className="butn main-hover-black fsz-24 me-3 mt-4 mt-lg-0"> <span> <i className="la la-bullseye me-2"></i> Marketing </span> </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-box" data-speed="1" data-lag="0.7">
              <a href="#" className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                    </path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900"> . read more about us . Swak agency </textPath>
                  </text>
                </svg>
              </a>
              <i className="ti-arrow-top-right icon fsz-45"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header