import React from 'react';
//= Static Data
import data from '@/data/CreativeAgency/team.json';

function Team() {
  return (
    <section className="tc-team-style5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow">
              <div className="section-title">
                <p className="fsz-14 text-uppercase color-666 mb-20"> team </p>
                <h2 className="fsz-50 mb-40"> Swak specialists first for works </h2>
              </div>
              <div className="text fsz-16 color-666">
                Swak Agency is a small startup agency. We help businesses elevate their value  through custom software development, product design, QA and consultancy services.
              </div>
              <div className="button_su border-0 mt-60">
                <span className="su_button_circle bg-orange1 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-1 border-dark border button_su_inner bg-transparent hover-white py-3 px-5">
                  <span className="button_text_container fsz-14"> join us today </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-cards">
              <div className="row gx-3">
                {data.map(item => (
                  <div className="col-lg-6" key={item.id}>
                    <div className="team-card wow fadeInUp slow" data-wow-delay="0.2s">
                      <a href="#" className="img">
                        <img src={item.picture} alt="" className="main-img" />
                        <span className="icon"> <img src="/home_5/assets/img/logo_icon.png" alt="" /> </span>
                      </a>
                      <div className="info pt-30">
                        <p className="fsz-14 color-orange1 text-uppercase mb-1"> {item.position} </p>
                        <h5 className="fsz-24"> {item.name} </h5>
                        <div className="social-icons">
                          <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                          <a href="#"> <i className="fab fa-twitter"></i> </a>
                          <a href="#"> <i className="fab fa-behance"></i> </a>
                          <a href="#"> <i className="fab fa-youtube"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team