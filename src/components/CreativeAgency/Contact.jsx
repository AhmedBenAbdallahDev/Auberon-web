import React from 'react';

function Contact() {
  return (
    <section className="tc-contact-style5">
      <div className="container">
        <div className="contact-form">
          <div className="row">
            <div className="col-lg-5 order-last order-lg-first">
              <form action="contact.php" className="form">
                <div className="form-group">
                  <label className="fsz-12 text-uppercase" > full Name <span className="color-orange1"> * </span> </label>
                  <input type="text" className="form-control" placeholder="Your Full Name" />
                </div>
                <div className="form-group">
                  <label className="fsz-12 text-uppercase" > email address <span className="color-orange1"> * </span> </label>
                  <input type="text" className="form-control" placeholder="Your Email Address" />
                </div>
                <div className="form-group">
                  <label className="fsz-12 text-uppercase" > details <span className="color-orange1"> * </span> </label>
                  <textarea name="details" rows="6" placeholder="Project Details" className="form-control"></textarea>
                </div>
                <div className="button_su border-0 mt-10">
                  <span className="su_button_circle bg-000 desplode-circle"></span>
                  <a href="#" className="butn text-uppercase border-0 button_su_inner bg-orange1 py-3 px-5">
                    <span className="button_text_container fsz-14 text-white"> send message </span>
                  </a>
                </div>
              </form>
            </div>
            <div className="col-lg-6 offset-lg-1">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact