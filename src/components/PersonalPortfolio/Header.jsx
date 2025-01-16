import React from 'react';

function Header() {
  return (
    <header className="tc-header-style8">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="info">
              <h1 className="wow fadeInUp slow">
                Hi, I’m <span className="color-green1"> Swak </span> <br /> I Can Make <span className="color-999"> Website Design, </span>  <span className="color-999"> App Design, </span>  <span className="color-999"> iOs Design </span>
              </h1>
              <div className="btm-info mt-90">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="img icon-200 rounded-circle overflow-hidden img-cover wow fadeInUp slow">
                      <img src="/home_8/assets/img/hero.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="inf wow fadeInUp slow" data-wow-delay="0.2s">
                      <div className="text fsz-20 color-999">
                        Highly respected and influential UI & UX designer in the tech industry. He is currently a design partner at Khosla Ventures
                      </div>
                      <div className="button_su border-0 mt-40">
                        <span className="su_button_circle bg-dark desplode-circle"></span>
                        <a href="#" className="butn text-uppercase border-1 border-dark border button_su_inner bg-green1 py-3 px-5">
                          <span className="button_text_container fsz-14 text-white"> let’s talk </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-text">
        <p className="fsz-12 text-uppercase"> made with love in <span className="color-green1"> themescamp </span> </p>
      </div>
      <div className="float-contact-info">
        <div className="cont fsz-12 text-uppercase"> <a href="#"> info@webmail.com </a>  <span className="dash mx-4"> - </span>  <a href="#"> +888 999 555 00 </a> </div>
      </div>
      <div className="rotate-box" data-speed="1" data-lag="0.4">
        <a href="#" className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
          <svg className="textcircle" viewBox="0 0 500 500">
            <defs>
              <path id="textcircle"
                d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
              </path>
            </defs>
            <text>
              <textPath xlinkHref="#textcircle" textLength="900"> get an amazing experirnce with yout products   % </textPath>
            </text>
          </svg>
        </a>
        <img src="/home_8/assets/img/dot.png" alt="" className="icon" />
      </div>
    </header>
  )
}

export default Header