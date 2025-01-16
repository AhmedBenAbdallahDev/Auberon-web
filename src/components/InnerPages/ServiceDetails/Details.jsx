import React from 'react';

function Details() {
  return (
    <section className="tc-services-det-info-style1">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-9">
            <div className="main-side pe-lg-5">
              <div className="main-img img-cover mb-60">
                <img src="/inner_pages/assets/img/service_det/main-img.jpg" alt="" />
              </div>

              <h2 className="fsz-35 mb-20"> Service Overview </h2>

              <div className="text fsz-16 color-666 mb-40"> Web development is the process of creating dynamic websites or web applications that are accessible through the internet. It involves designing, building, and maintaining websites using various programming languages, frameworks, and technologies. </div>

              <h6 className="fsz-20 mb-30 fw-bold"> The process of web development includes several stages, such as: </h6>

              <ul className="mb-40">
                <li className="text fsz-16 color-666 mb-20"> <strong className="color-000"> Planning: </strong> This involves identifying the goals & objectives of the website, as well as the target audience & their need. </li>
                <li className="text fsz-16 color-666 mb-20"> <strong className="color-000"> Design: </strong> This involves creating a visual design for the website, including layout, color scheme, and typography. </li>
                <li className="text fsz-16 color-666 mb-20"> <strong className="color-000"> Development: </strong> This involves writing code to implement the design and functionality of the website, using languages such as HTML, CSS, JavaScript, and various back-end programming languages. </li>
                <li className="text fsz-16 color-666 mb-20"> <strong className="color-000"> Testing: </strong> This involves checking the website for errors, bugs, & other issues to ensure it functions as intended. </li>
                <li className="text fsz-16 color-666 mb-20"> <strong className="color-000"> Maintenance: </strong> This involves updating the website and fixing any issues that arise over time. </li>
              </ul>

              <div className="text fsz-16 color-666 mb-50"> There are several types of web development, including front-end development, back-end development, and full-stack development. Front-end development involves creating the visual and interactive elements of the website that users see and interact with, while back-end development involves creating the server-side code and database infrastructure that power the website. Full-stack development involve working on both the front-end & back-end of the website. </div>

              <div className="sub-imgs">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="sub-img img-cover th-425 overflow-hidden mb-50">
                      <img src="/inner_pages/assets/img/service_det/sub_img1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sub-img img-cover th-425 overflow-hidden mb-50">
                      <img src="/inner_pages/assets/img/service_det/sub_img2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="process">
                <h3 className="fsz-30"> Work Process </h3>
                <div className="process-content">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="#0" className="process-card">
                        <span className="fsz-18 fw-500"> Sketch </span>
                        <span className="num"> 01 </span>
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#0" className="process-card">
                        <span className="fsz-18 fw-500"> Wireframe </span>
                        <span className="num"> 02 </span>
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#0" className="process-card">
                        <span className="fsz-18 fw-500"> Making Design </span>
                        <span className="num"> 04 </span>
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#0" className="process-card">
                        <span className="fsz-18 fw-500"> Development </span>
                        <span className="num"> 03 </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text fsz-16 color-666 mt-40"> Creating an ecommerce website typically involves selecting a platform or software, designing the website's layout & branding, uploading product or service information, and integrating payment and shipping options. Additionally, ecommerce websites require ongoing maintenance, including managing inventory, processing orders, and updating content and promotions. Ecommerce websites often include features such as payment gateways to accept payments, customer accounts for storing order history and shipping information, and shopping carts to keep track of items a customer wants to purchase. </div>

            </div>
          </div>
          <div className="col-lg-3">
            <div className="widgets mt-5 mt-lg-0">

              <div className="links">
                <a href="#"> <span> UI & UX Design </span> <i className="far fa-long-arrow-right"></i> </a>
                <a href="#"> <span> Web Developments </span> <i className="far fa-long-arrow-right"></i> </a>
                <a href="#"> <span> App Development </span> <i className="far fa-long-arrow-right"></i> </a>
                <a href="#"> <span> Business Consultancy </span> <i className="far fa-long-arrow-right"></i> </a>
                <a href="#"> <span> SEO & Marketing </span> <i className="far fa-long-arrow-right"></i> </a>
              </div>

              <div className="quote-form">
                <h6 className="fsz-20 mb-30"> Get Free Quote </h6>
                <div className="form-group">
                  <input type="text" placeholder="Your name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Your email" className="form-control" />
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder="Message" className="form-control" ></textarea>
                </div>
                <button type="submit" className="bttn"> Submit now </button>
              </div>

              <div className="overlay-img img-cover">
                <img src="/inner_pages/assets/img/service_det/overlay_img.jpg" alt="" />
                <div className="inf">
                  <p className="fsz-20"> +888 777 666 00 </p>
                  <h5> <a href="#" className="fsz-24 fw-bold mt-1"> Get An Free Quote </a> </h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details