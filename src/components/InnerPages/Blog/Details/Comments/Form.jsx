import React from 'react';

function Form() {
  return (
    <div className="comment-form">
      <h3 className="fsz-26 mb-30"> 03 Comments </h3>
      <div className="form-box">
        <div className="form-group">
          <textarea name="" rows="5" className="form-control" placeholder="Comments"></textarea>
          <span className="float-icon"> <i className="fas fa-pen"></i> </span>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your name" />
          <span className="float-icon"> <i className="fas fa-user"></i> </span>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email address" />
          <span className="float-icon"> <i className="fas fa-envelope"></i> </span>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Website" />
          <span className="float-icon"> <i className="fas fa-globe"></i> </span>
        </div>
        <div className="button_su mt-30 rounded-0 border-0">
          <span className="su_button_circle bg-dark desplode-circle"></span>
          <a href="#" className="butn text-capitalize button_su_inner bg-blue1 text-white py-3 px-5 rounded-0 border-0">
            <span className="button_text_container fsz-14 fw-500"> <i className="fas fa-comments me-2"></i> Post Comment </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Form