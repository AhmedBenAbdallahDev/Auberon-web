import React from 'react';

function Newsletter() {
  return (
    <div className="tc-newsletter-style9">
      <div className="container">
        <div className="tc-newsletter-card wow fadeInUp slow">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form">
                <div className="form-group px-4">
                  <span className="icon"> <i className="fal fa-envelope-open me-3"></i> </span>
                  <input type="text" placeholder="Business Email Address" />
                  <button type="submit"> Subscribe Now </button>
                </div>
                <p className="fsz-16 color-666 mt-3 px-4"> We are nore gonna save your data </p>
              </div>
            </div>
          </div>
          <div className="lg-letter js-title"> Newsletter </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter