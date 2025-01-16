import React from 'react';

function Contact() {
  return (
    <section className="tc-contact-style8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fsz-90 js-splittext-lines" data-wow-delay="0.1s"> Let’s collaborate with us for done your project. </h2>
          </div>
          <div className="col-lg-6">
            <div className="contact-form wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-50">
                    <p className="text-uppercase fw-500 mb-20"> services </p>
                    <div className="checks-content">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="services" id="services1" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="services1"> ui & ux design </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="services" id="services2" defaultValue="option2" defaultChecked />
                        <label className="form-check-label" htmlFor="services2"> illustrations </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="services" id="services3" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="services3"> development </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-50">
                    <p className="text-uppercase fw-500 mb-20"> budget </p>
                    <div className="checks-content">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="budget" id="budget1" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="budget1"> 5k - 10k </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="budget" id="budget2" defaultValue="option2" defaultChecked />
                        <label className="form-check-label" htmlFor="budget2"> less then 5k </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="budget" id="budget3" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="budget3"> 10k+ </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-40">
                    <input type="text" placeholder="full name" className="form-control" />
                    <span className="icon"><i className="fal fa-user"></i></span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-40">
                    <input type="text" placeholder="email address" className="form-control" />
                    <span className="icon"><i className="fal fa-envelope"></i></span>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-40">
                    <textarea rows="6" placeholder="message" className="form-control"></textarea>
                    <span className="icon"><i className="fal fa-pen"></i></span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-end">
                    <div className="button_su border-0">
                      <span className="su_button_circle bg-green1 desplode-circle"></span>
                      <a href="#" className="butn text-uppercase border-2 border-white border button_su_inner bg-transparent py-3 px-5">
                        <span className="button_text_container fsz-14 text-white"> submit request </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact