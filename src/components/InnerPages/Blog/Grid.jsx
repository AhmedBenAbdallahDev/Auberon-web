import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Blog/grid.json';

function Grid() {
  return (
    <section className="tc-blog-grid-style1">
      <div className="container">
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> {item.tag} </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> {item.date} </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> {item.title} </a> </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Grid