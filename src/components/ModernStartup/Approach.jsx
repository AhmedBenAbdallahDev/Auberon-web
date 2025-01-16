import React from 'react';

function Approach() {
  return (
    <section className="tc-approach-style3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <div className="tabs wow zoomIn slow">
              <a href="#"> <span> Research </span> </a>
              <a href="#"> <span> Concept </span> </a>
              <a href="#"> <span> Implementation </span> </a>
              <a href="#"> <span> Research </span> </a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="title mb-60">
                <h6 className="fsz-14 color-666 text-uppercase mb-20"> how we works </h6>
                <h2 className="fsz-50 mb-0"> Our <span className="sub_font fst-italic color-blue1"> Approach </span> </h2>
              </div>
              <div className="accordion" id="approach-accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="approach-head1">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#approach-collapse1" aria-expanded="true" aria-controls="approach-collapse1">
                      1. Research
                    </button>
                  </h2>
                  <div id="approach-collapse1" className="accordion-collapse collapse" aria-labelledby="approach-heading1" data-bs-parent="#approach-accordion">
                    <div className="accordion-body">
                      <div className="text">
                        After understand client’s story. We focus on building strategy and wireframes with much various layout. Help choose the best method for their client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="approach-head2">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#approach-collapse2" aria-expanded="true" aria-controls="approach-collapse2">
                      2. Concept
                    </button>
                  </h2>
                  <div id="approach-collapse2" className="accordion-collapse collapse show" aria-labelledby="approach-heading2" data-bs-parent="#approach-accordion">
                    <div className="accordion-body">
                      <div className="text">
                        After understand client’s story. We focus on building strategy and wireframes with much various layout. Help choose the best method for their client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="approach-head3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#approach-collapse3" aria-expanded="true" aria-controls="approach-collapse3">
                      3. Implementation
                    </button>
                  </h2>
                  <div id="approach-collapse3" className="accordion-collapse collapse" aria-labelledby="approach-heading3" data-bs-parent="#approach-accordion">
                    <div className="accordion-body">
                      <div className="text">
                        After understand client’s story. We focus on building strategy and wireframes with much various layout. Help choose the best method for their client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="approach-head4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#approach-collapse4" aria-expanded="true" aria-controls="approach-collapse4">
                      4. Testing
                    </button>
                  </h2>
                  <div id="approach-collapse4" className="accordion-collapse collapse" aria-labelledby="approach-heading4" data-bs-parent="#approach-accordion">
                    <div className="accordion-body">
                      <div className="text">
                        After understand client’s story. We focus on building strategy and wireframes with much various layout. Help choose the best method for their client
                      </div>
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

export default Approach