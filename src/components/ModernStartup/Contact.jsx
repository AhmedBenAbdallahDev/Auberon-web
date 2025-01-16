import React from 'react'

function Contact() {
  return (
    <section className="tc-contact-style3">
      <div className="container-fluid">
        <div className="title text-center mb-90">
          <h6 className="fsz-14 color-666 text-uppercase mb-20"> got a project in mind? </h6>
          <h2 className="fsz-50 mb-0"> Let’s work <span className="sub_font fst-italic color-blue1"> together! </span> </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form action="" className="form wow fadeInUp slow">
              <p className="text-danger text-center fw-500 mb-50"> * Marked fields are required to fill. </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> full Name <span className="text-danger"> * </span> </label>
                    <input type="text" placeholder="your name" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> email adress <span className="text-danger"> * </span> </label>
                    <input type="text" placeholder="Your email adress" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> phone <small className="op-4"> (optional) </small> </label>
                    <input type="text" placeholder="Your number phone" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> subject <span className="text-danger"> * </span> </label>
                    <select name="" id="" className="form-control form-select">
                      <option value=""> Select a subject </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> your budget <small className="op-4"> (optional) </small> </label>
                    <input type="text" placeholder="A range budget for your project, ex: $1,000 - $5,000" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="fsz-12 text-uppercase"> message </label>
                    <textarea name="" id="" rows="6" className="form-control" placeholder="Wrire your message here ..."></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <div className="upload-content">
                    <input type="file" className="file" />
                    <span className="float-text fsz-16"> <i className="la la-paperclip me-1"></i> Add An Attachment </span>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      By submitting, I’m agreed to the Terms & Conditons
                    </label>
                  </div>
                  <div className="button_su mt-20">
                    <span className="su_button_circle bg-000 desplode-circle"></span>
                    <a href="#" className="butn button_su_inner bg-blue1 text-center">
                      <span className="button_text_container fsz-16 text-uppercase text-white"> send message </span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact