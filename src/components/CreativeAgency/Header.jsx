import React from 'react';

function Header() {
  return (
    <header className="tc-header-style5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="info">
              <h1 className="js-title"> <span className="sub_font d-block fst-italic fw-500"> Creative </span> Design Agency </h1>
              <div className="btm-info">
                <p className="fsz-24"> Get the right team. The <br /> first time </p>
                <span className="line"></span>
                <div className="button_su border-0">
                  <span className="su_button_circle bg-000 desplode-circle"></span>
                  <a href="#" className="butn text-uppercase border-0 button_su_inner bg-orange1 py-3 px-5">
                    <span className="button_text_container fsz-14 text-white"> Get Started Now </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_5/assets/img/head_pattern.png" alt="" className="pattern" />
      <img src="/home_5/assets/img/hero.png" alt="" className="hero" />
    </header>
  )
}

export default Header