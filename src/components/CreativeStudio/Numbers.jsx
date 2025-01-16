import React from 'react';

function Numbers() {
  return (
    <section className="tc-numbers-style2 pt-100 pb-100 bg-lightGreen1 color-000">
      <div className="container wow fadeInUp slow">
        <div className="row">
          <div className="col-lg-4">
            <div className="number-card d-flex align-items-center my-4">
              <h2 className="fsz-60 fw-400 me-30 flex-shrink-0"> 85% </h2>
              <p className="fsz-18 text-uppercase"> happy customers <br /> & repeating </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="number-card d-flex align-items-center my-4">
              <h2 className="fsz-60 fw-400 me-30 flex-shrink-0"> 150+ </h2>
              <p className="fsz-18 text-uppercase"> brands trusted <br /> & companion </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="number-card d-flex align-items-center my-4">
              <h2 className="fsz-60 fw-400 me-30 flex-shrink-0"> 256+ </h2>
              <p className="fsz-18 text-uppercase"> projects completed <br /> in 25 years </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers