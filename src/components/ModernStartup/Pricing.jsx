import React from 'react';

function Pricing() {
  return (
    <section className="tc-pricing-style3">
      <div className="container-fluid">
        <div className="title mb-60">
          <h6 className="fsz-14 color-666 text-uppercase mb-20"> pricing and plan </h6>
          <h2 className="fsz-50 mb-0"> Ready to <span className="sub_font fst-italic color-blue1"> get started? </span> </h2>
        </div>
        <div className="row wow fadeInUp slow">
          <div className="col-lg-6">
            <div className="pricing-card">
              <div className="card-title">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="inf">
                      <h5 className="fsz-24 text-uppercase mb-20"> Standard </h5>
                      <p className="color-999"> Have a design ready to build? <br /> or small budget </p>
                    </div>
                  </div>
                  <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                    <div className="price">
                      <h2 className="fsz-60 color-blue1"> $799 </h2>
                      <p className="fw-500"> Per month </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item"> <span className="icon"></span> Need your wireframe </div>
                    <div className="item"> <span className="icon"></span> Design with Figma, Framer </div>
                    <div className="item"> <span className="icon"></span> Implement with Webflow, React, Wordpress or Laravel/PHP </div>
                    <div className="item"> <span className="icon"></span> Remote/Online working </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item"> <span className="icon"></span> Work in business day, no weekend </div>
                    <div className="item"> <span className="icon"></span> Support limited 6 months </div>
                  </div>
                </div>
              </div>
              <div className="button_su mt-20 w-100">
                <span className="su_button_circle bg-light1 desplode-circle"></span>
                <a href="#" className="butn button_su_inner bg-transparent w-100 text-center">
                  <span className="button_text_container fsz-16 text-uppercase"> pick this package </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-card border-blue1">
              <div className="card-title">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="inf">
                      <h5 className="fsz-24 text-uppercase mb-20"> Premium <span className="popular"> Popular </span> </h5>
                      <p className="color-999"> Have a design ready to build? <br /> or small budget </p>
                    </div>
                  </div>
                  <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                    <div className="price">
                      <h2 className="fsz-60 color-blue1"> $2,999 </h2>
                      <p className="fw-500"> Per month </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item"> <span className="icon"></span> Create all from scratch, don’t need design </div>
                    <div className="item"> <span className="icon"></span> Design with Figma, Framer </div>
                    <div className="item"> <span className="icon"></span> Implement with Webflow, React, Wordpress or Laravel/PHP </div>
                    <div className="item"> <span className="icon"></span> Online & Offline working </div>
                    <div className="item"> <span className="icon"></span> Your projects alway be priority </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item"> <span className="icon"></span> Work with both weenkend (Saturday) </div>
                    <div className="item"> <span className="icon"></span> Support limited 12 months </div>
                    <div className="item"> <span className="icon"></span> Customer care gifts </div>
                    <div className="item"> <span className="icon"></span> Invoicing, Tax documentation included </div>
                    <div className="item"> <span className="icon"></span> NDA Agreement included </div>
                  </div>
                </div>
              </div>
              <div className="button_su mt-20 w-100">
                <span className="su_button_circle bg-000 desplode-circle"></span>
                <a href="#" className="butn button_su_inner bg-blue1 w-100 text-center">
                  <span className="button_text_container fsz-16 text-uppercase text-white"> pick this package </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="fsz-14 mt-50"> Don’t find the package with your plan? Want to setup a new tailor-made package for only you? <a href="#" className="color-blue1 text-decoration-underline"> Contact us </a> </p>
      </div>
    </section>
  )
}

export default Pricing