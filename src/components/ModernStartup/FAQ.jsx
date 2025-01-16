import React from 'react';
//= Data
import data from '@/data/ModernStartup/faq.json';

function FAQ() {
  return (
    <section className="tc-faq-style3">
      <div className="container-fluid">
        <div className="content">
          <div className="section-title mb-90">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="title">
                  <h6 className="fsz-14 color-666 text-uppercase mb-20"> Frequently asked questions </h6>
                  <h2 className="fsz-50 mb-0"> Need a <span className="sub_font fst-italic color-blue1"> support? </span> </h2>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                <div className="button_su">
                  <span className="su_button_circle bg-light1 desplode-circle"></span>
                  <a href="#" className="butn button_su_inner bg-transparent">
                    <span className="button_text_container fsz-16 text-uppercase"> see all questions </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion wow fadeInUp slow" id="accordionExample">
            <div className="row gx-5">
              {new Array(Math.ceil(data.length / 5)).fill().map((_, i) => (
                <div className="col-lg-6" key={i}>
                  {data.map((item, index) => (
                    // Dividing items per column (5 items per column)
                    index < (i + 1) * 5 & index >= i * 5 ? (
                      <div className="accordion-item" key={item.id}>
                        <h2 className="accordion-header" id={`head${item.id}`}>
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                            {item.title}
                          </button>
                        </h2>
                        <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className="text">
                              {item.details}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ