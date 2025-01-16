'use client';
import React, { useState } from 'react';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';

function FAQ() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <section className="tc-faq-faq-style1">
      <div className="container">
        <div className="row justify-content-between gx-0">
          <div className="col-lg-5">
            <div className="vid-side">
              <div className="img img-cover">
                <img src="/home_10/assets/img/faq1.jpg" alt="" />
              </div>
              <div className="img2 img-cover" data-lag="0.1">
                <img src="/home_10/assets/img/faq2.jpg" alt="" />
              </div>
              <a href="https://www.youtube.com/watch?v=qYgdnM3BC3g&t=7s" className="play-btn" onClick={openVideo}> <i className="fas fa-play"></i> </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-side">
              <div className="section-head mb-60">
                <p className="fsz-14 text-uppercase color-blue1 mb-10 ltspc-2"> faq questions </p>
                <h2 className="fsz-60 js-splittext-lines"> Get Solid Q & Answer </h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                      How benefit that I got when choose Standard Package?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="text fsz-14 color-777">
                        Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Website project with standard package?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="text fsz-14 color-777">
                        Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How about Data Security & NDA Agreement?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="text fsz-14 color-777">
                        Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Can I unsubscribe my package for anytime?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="text fsz-14 color-777">
                        Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </section>
  )
}

export default FAQ