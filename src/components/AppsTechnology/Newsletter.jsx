import React from 'react';

function Newsletter() {
  return (
    <section className="tc-newsletter-style4">
      <div className="container">
        <div className="newsletter-content wow fadeInUp slow">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20"> Newsletter </p>
                <h2 className="fsz-60 mb-30"> Stay up to date with product updates, learning resources, and more. </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="contact.php" className="form">
                <div className="form-group">
                  <span className="icon"> <i className="fal fa-envelope-open"></i> </span>
                  <input type="text" placeholder="Business email" className="form-control" />
                  <div className="button_su flex-shrink-0">
                    <span className="su_button_circle bg-dark desplode-circle"></span>
                    <a href="#" className="butn button_su_inner bg-blue1 border-0">
                      <span className="button_text_container fsz-14 text-uppercase text-white"> Subscribe <i className="fal fa-long-arrow-right ms-2"></i> </span>
                    </a>
                  </div>
                </div>
                <div className="form-check mt-40">
                  <input className="form-check-input rounded-circle bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label color-999" htmlFor="flexCheckDefault">
                    I agree to receive marketing communications from Hiro, and I <br /> consent to my personal information being processed in accordance <br /> with Swak <a href="#" className="text-decoration-underline text-white"> Privacy Policy. </a>
                  </label>
                </div>
                <div className="social-links mt-40 text-uppercase d-flex align-items-center">
                  <h6 className="mb-0 me-3"> follow us : </h6>
                  <div className="links">
                    <a href="#" className="me-3"> <i className="fab fa-facebook-f"></i> </a>
                    <a href="#" className="me-3"> <i className="fab fa-twitter"></i> </a>
                    <a href="#" className="me-3"> <i className="fab fa-youtube"></i> </a>
                    <a href="#" className="me-3"> <i className="fab fa-instagram"></i> </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="numbers pt-100 pb-100 wow fadeInUp slow">
          <div className="row">
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 85% </h2>
                <p className="fsz-18 color-999"> Happy customers <br /> & repeating </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 150+ </h2>
                <p className="fsz-18 color-999"> Brands trusted <br /> & companion </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 265+ </h2>
                <p className="fsz-18 color-999"> Projects completed <br /> in 25 years </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter