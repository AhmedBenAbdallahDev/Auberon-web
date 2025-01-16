'use client';
import React, { useState } from 'react';
//= Components
import Widgets from './Widgets';
import ModalVideo from '@/components/Common/ModalVideo';
//= Static Data
import data from '@/data/InnerPages/Blog/list.json';

function List() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <section className="tc-blog-list-style1">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-8">
            <div className="main-posts">
              {data.map(item => (
                <div className="main-post" key={item.id}>
                  {
                    item.image &&
                    <div className={`img ${item.smallImage ? 'sm-img' : ''}`}>
                      <img src={item.image} alt="" className="main-img" />
                      <div className="btm-img-cont">
                        {
                          item.author &&
                          <div className="author">
                            <div className="img-icon icon-40 img-cover me-3 flex-shrink-0">
                              <img src={item.author.picture} alt="" />
                            </div>
                            <div className="inf">
                              <h5 className="fsz-16 color-ccc m-0"> by <a href="#0" className="color-000"> {item.author.name} </a> </h5>
                            </div>
                          </div>
                        }
                        {
                          item.tags &&
                          <div className="tags">
                            <a href="#"> {item.tag} </a>
                          </div>
                        }
                      </div>
                      {
                        item.video &&
                        <a href="https://www.youtube.com/watch?v=qYgdnM3BC3g" className="play-btn" onClick={openVideo}> <i className="fas fa-play"></i> </a>
                      }
                    </div>
                  }
                  <div className="info">
                    <h3> <a href="#" className="hover-blue1 mb-10"> {item.title} </a> </h3>
                    <div className="text fsz-16 color-777"> {item.details} </div>
                    <div className="btm-info">
                      <a href="#"> <i className="fal fa-eye me-1"></i> <span> {item.views} Views </span> </a>
                      <a href="#"> <i className="fal fa-comments me-1"></i> <span> {item.comments} Comments </span> </a>
                      <a href="#"> <i className="fal fa-calendar-alt me-1"></i> <span> {item.date} </span> </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="testi-box">
                <div className="icon">
                  <img src="/inner_pages/assets/img/icons/ico5.png" alt="" />
                </div>
                <h3> <a href="#" className="hover-blue1"> Including professionals in the IT sphere — don’t know where to start. </a> </h3>
                <img className="float-icon" src="/inner_pages/assets/img/icons/ico6.png" alt="" />
              </div>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Widgets />
        </div>
      </div>
      <ModalVideo videoId="qYgdnM3BC3g" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </section>
  )
}

export default List