import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Blog/masonry.json';

function Masonry() {
  const rowsCount = 3;
  const itemsPerRow = Math.ceil(data.length / rowsCount);
  const rows = [];

  for (let i = 0; i < rowsCount; i++) {
    rows.push([]);
  }

  data.forEach((item, index) => {
    const currentRow = Math.floor(index / itemsPerRow);
    rows[currentRow].push(item);
  });

  return (
    <section className="tc-blog-masonry-style1">
      <div className="container">
        <div className="row">
          {rows.map((row, index) => (
            <div className="col-lg-4" key={index}>
              <div className="blog-colmn">
                <div className={`projects-column ${index === 0 ? 'frs' : index === 1 ? 'sec' : 'thr'}-column`}>
                  {row.map(item => (
                    <div className="blog-card wow fadeInUp slow" key={item.id}>
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
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-4">
            <div className="blog-colmn">
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog22.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog23.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog24.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog25.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-colmn">
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog26.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog27.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog28.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog29.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-colmn">
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.4s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog30.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.4s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog31.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.4s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog32.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
              <div className="blog-card wow fadeInUp slow" data-wow-delay="0.4s">
                <div className="img img-cover">
                  <img src="/inner_pages/assets/img/blog/blog33.png" alt="" />
                </div>
                <div className="info">
                  <div className="top-inf">
                    <a href="#0" className="tag"> business </a>
                    <span className="slash color-ccc mx-3"> / </span>
                    <a href="#0" className="date"> 24th june 2023 </a>
                  </div>
                  <h5> <a href="#" className="fsz-24 hover-blue1 mt-15 fw-600"> A business owned and operated by a single individual </a> </h5>
                </div>
              </div>
            </div>
          </div>
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

export default Masonry