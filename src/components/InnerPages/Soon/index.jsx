import React from 'react';

function Soon() {
  return (
    <header className="tc-soon-header-style1">
      <div className="logo">
        <img src="/inner_pages/assets/img/logo_home2_drk.png" alt="" />
      </div>
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-lg-10">
              <h1> Thank you for your interest in our <span className="color-blue1"> upcoming project </span> </h1>
            </div>
            <div className="col-lg-7">
              <div className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Email Adress" className="form-control" />
                </div>
                <div className="button_su border-0 radius-6">
                  <span className="su_button_circle bg-000 desplode-circle"></span>
                  <a href="#" className="butn text-uppercase border-1 border-blue1 border button_su_inner bg-blue1 radius-6">
                    <span className="button_text_container fsz-14 text-white"> subscribe now </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol1" />
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol2" />
    </header>
  )
}

export default Soon