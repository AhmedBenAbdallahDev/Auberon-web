import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Team/team.json';

function Team() {
  return (
    <section className="tc-team-team-style1 pb-70 pt-120">
      <div className="container">
        <div className="team-cards">
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-3" key={item.id}>
                <div className="team-card wow fadeInUp slow">
                  <a href="#" className="img">
                    <img src={item.picture} alt="" className="main-img" />
                    <span className="icon"> <img src="/inner_pages/assets/img/team/logo_icon.png" alt="" /> </span>
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
    </section>
  )
}

export default Team