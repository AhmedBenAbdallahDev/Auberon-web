import React from 'react';
//= Static Data
import data from '@/data/InnerPages/Portfolio/masonry.json';

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
    <section className="tc-portfolio-masonry-style1 pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row gx-5">
          {rows.map((row, index) => (
            <div className="col-lg-4" key={index}>
              <div className={`projects-column ${index === 0 ? 'frs' : index === 1 ? 'sec' : 'thr'}-column`}>
                {row.map(item => (
                  <div className="portfolio-card mb-80 wow fadeInUp slow" key={item.id}>
                    <div className="img overflow-hidden img-cover">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info">
                      <div className="cont">
                        <p className="fsz-14 text-uppercase mb-10"> {item.tags} </p>
                        <h5> <a href="#" className="fsz-24 fw-600 hover-underline"> {item.title} </a> </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="button_su border-0 rounded-0">
            <span className="su_button_circle bg-light1 desplode-circle"></span>
            <a href="#" className="butn text-uppercase border-1 border_light border button_su_inner bg-transparent py-4 px-5 rounded-0">
              <span className="button_text_container fsz-14 color-blue1"> more works <i className="fal fa-plus ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masonry