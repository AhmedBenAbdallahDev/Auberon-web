import React from 'react';

function ContactForm() {
  return (
    <section className="tc-contact-form-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <div className="section-title">
                <p className="fsz-14 text-uppercase color-666 mb-20"> get a quote </p>
                <h2 className="fsz-50 mb-50"> Get a personal design consultation </h2>
              </div>
              <div className="contact-item">
                <span className="icon"><i className="fal fa-clock"></i></span>
                <h5 className="fsz-26 fw-bold text-capitalize title"> Open Hours </h5>
                <div className="text">
                  <p> Monday – Saturday: 8am – 6pm </p>
                  <p> Sunday: 11am — 4pm </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><i className="fal fa-envelope-open"></i></span>
                <h5 className="fsz-26 fw-bold text-capitalize title"> Contact Info </h5>
                <div className="text">
                  <p> Toll Free: 1-885-245-45677 </p>
                  <p> Email: info@Swak-design.com </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><i className="fal fa-map-marked"></i></span>
                <h5 className="fsz-26 fw-bold text-capitalize title"> Location </h5>
                <div className="text">
                  <p> 467 Davidson ave, Los Angeles CA 95716 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="form">
              <h3 className="fsz-30"> Make a request </h3>
              <p className="fsz-16 color-777 mb-40"> Please provide more information so I can better assist </p>
              <div className="form-group">
                <label className="fsz-12 text-uppercase mb-10"> full Name <span className="color-blue1"> ** </span> </label>
                <input type="text" className="form-control" placeholder="Enter here" />
              </div>
              <div className="form-group">
                <label className="fsz-12 text-uppercase mb-10"> email address <span className="color-blue1"> ** </span> </label>
                <input type="text" className="form-control" placeholder="Enter here" />
              </div>
              <div className="form-group">
                <label className="fsz-12 text-uppercase mb-10"> message <span className="color-blue1"> ** </span> </label>
                <textarea name="" id="" rows="5" placeholder="Project Details" className="form-control"></textarea>
              </div>
              <div className="button_su border-0 mt-10">
                <span className="su_button_circle bg-000 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-0 button_su_inner bg-blue1 py-3 px-5">
                  <span className="button_text_container fsz-14 text-white"> send message </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm