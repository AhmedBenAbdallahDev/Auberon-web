function Footer() {
  return (
    <footer className="tc-footer-style4">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4">
              <div className="links-item mb-60">
                <h5 className="sub-title fsz-24 mb-30"> Work Inquiry </h5>
                <ul className="links">
                  <li> <a href="#"> contact@Auberon-app.com </a> </li>
                  <li> <a href="#"> (054) 8687 90 50 </a> </li>
                </ul>
              </div>
              <div className="links-item mb-60">
                <h5 className="sub-title fsz-24 mb-30"> London </h5>
                <ul className="links">
                  <li> <a href="#"> 205B Shaftesbury Avenuem </a> </li>
                  <li> <a href="#"> London SE15 4BQ UK </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="links-item mb-60">
                <h5 className="sub-title fsz-24 mb-30"> Open Position </h5>
                <ul className="links">
                  <li> <a href="#"> UI/UX Website Designer </a> </li>
                  <li> <a href="#"> Senior Front-end WordPress Developer </a> </li>
                </ul>
              </div>
              <div className="links-item mb-60">
                <h5 className="sub-title fsz-24 mb-30"> Links </h5>
                <ul className="links">
                  <li> <a href="#"> Terms & Conditions </a> </li>
                  <li> <a href="#"> Privacy Policy </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="links-item mb-60">
                <h5 className="sub-title fsz-24 mb-30"> Other Pages </h5>
                <ul className="links">
                  <li className="half-link"> <a href="#"> About Us </a> <a href="#"> Refund Policy </a> </li>
                  <li className="half-link"> <a href="#"> Services </a> <a href="#"> Product Status </a> </li>
                  <li className="half-link"> <a href="#"> Insights </a> <a href="#"> Design Kit </a> </li>
                  <li className="half-link"> <a href="#"> Price & Plan </a> <a href="#"> Publication </a> </li>
                  <li className="half-link"> <a href="#"> T & C </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-5">
              <p> © Auberon Startup Agency 2025 </p>
            </div>
            <div className="col-lg-5">
              <div className="social-links">
                <a href="#"> Dribbble </a>
                <a href="#"> Behance </a>
                <a href="#"> Instagram </a>
                <a href="#"> Linkedin </a>
                <a href="#"> Youtube </a>
              </div>
            </div>
            <div className="col-lg-2 text-lg-end d-none d-lg-block">
              <div className="dropdown">
                <button className="border-0 bg-transparent p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti-world me-1"></i> ENG
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">FR</a></li>
                  <li><a className="dropdown-item" href="#">AR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer