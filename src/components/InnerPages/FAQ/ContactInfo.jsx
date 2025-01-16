import React from 'react';

function ContactInfo() {
  return (
    <section className="tc-faq-contact-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-card mb-4 mb-lg-0">
              <p className="fsz-14 color-blue1 text-uppercase mb-10"> support email </p>
              <h4> <a href="#" className="fsz-26 fw-bold mb-30"> info@webmail.com </a> </h4>
              <div className="text fsz-18 color-666"> Fortune 500 companies are eager  to work with us easily. </div>
              <div className="icon mt-50 th-60 img-contain">
                <img src="/inner_pages/assets/img/icons/ico1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-card mb-4 mb-lg-0">
              <p className="fsz-14 color-blue1 text-uppercase mb-10"> Phone number </p>
              <h4> <a href="#" className="fsz-26 fw-bold mb-30"> 08. 777 999 000 </a> </h4>
              <div className="text fsz-18 color-666"> Fortune 500 companies are eager  to work with us easily. </div>
              <div className="icon mt-50 th-60 img-contain">
                <img src="/inner_pages/assets/img/icons/ico2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-card mb-4 mb-lg-0">
              <p className="fsz-14 color-blue1 text-uppercase mb-10"> live chat </p>
              <h4> <a href="#" className="fsz-26 fw-bold mb-30"> Make A Request </a> </h4>
              <div className="text fsz-18 color-666"> Fortune 500 companies are eager  to work with us easily. </div>
              <div className="icon mt-50 th-60 img-contain">
                <img src="/inner_pages/assets/img/icons/ico3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo