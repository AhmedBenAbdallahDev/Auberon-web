//= Components
import Navbar from './Navbar';

function Header() {
  return (
    <header className="tc-header-style4">
      <Navbar />
      <div className="container">
        <div className="info wow fadeInUp slow">
          <h1 className=""> Interactive app <span> for business. </span> </h1>
          <div className="btns">
            <a href="#"> <img src="/home/assets/img/header/apple.svg" alt="" /> </a>
            <a href="#"> <img src="/home/assets/img/header/play.svg" alt="" /> </a>
          </div>
        </div>
      </div>
      <div className="shaps">
        <img src="/home/assets/img/header/shap1.png" alt="" className="shap-1" />
        <span className="shap-2 parallaxed"></span>
        <img src="/home/assets/img/header/img.png" alt="" className="img" data-speed="1" data-lag="0.7" />
      </div>
    </header>
  )
}

export default Header