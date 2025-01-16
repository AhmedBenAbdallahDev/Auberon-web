import React from 'react';

function Tags() {
  return (
    <div className="tags-row mt-50">
      <div className="row">
        <div className="col-lg-6">
          <div className="tags">
            <h6 className="fsz-20 fw-bold text-capitalize mb-20"> Releted Tags </h6>
            <div className="tags-links">
              <a href="#"> Popular </a>
              <a href="#"> Desgin </a>
              <a href="#"> UX </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end mt-5 mt-lg-0">
          <div className="social">
            <h6 className="fsz-20 fw-bold text-capitalize mb-20"> Social Share </h6>
            <div className="social-links">
              <a href="#"> <i className="fab fa-facebook-f"></i> </a>
              <a href="#"> <i className="fab fa-twitter"></i> </a>
              <a href="#"> <i className="fab fa-typo3"></i> </a>
              <a href="#"> <i className="fab fa-staylinked"></i> </a>
              <a href="#"> <i className="fab fa-tumblr"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags