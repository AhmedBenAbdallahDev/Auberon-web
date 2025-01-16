import React from 'react'

function Header() {
  return (
    <header className="tc-header-style7">
      <div className="container">
        <div className="info wow fadeInUp slow">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <h1 className="js-title"> Consulting Agency </h1>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="button_su border-0 mt-4 mt-lg-0 radius-3">
                <span className="su_button_circle bg-darkBlue1 desplode-circle"></span>
                <a href="#" className="butn text-uppercase border-0 button_su_inner bg-orange2 radius-3">
                  <span className="button_text_container fsz-14 text-white"> get appointment </span>
                </a>
              </div>
            </div>
          </div>
          <div className="btm-text wow fadeInUp slow">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="text fsz-18"> Swak Agency is a small startup agency. We help businesses elevate their value  through custom software development, product design, QA and consultancy services. </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header