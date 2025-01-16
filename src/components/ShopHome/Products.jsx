import React from 'react';
//= Static Data
import data from '@/data/ShopHome/products.json';

function Products() {
  return (
    <section className="tc-products-style9">
      <div className="container">
        <div className="section-head-style9 mb-20">
          <h3 className="fsz-40"> Featured Products </h3>
          <span className="line"></span>
          <a href="#" className="more-link"> View All <i className="fal fa-long-arrow-right ms-2"></i> </a>
        </div>
        <div className="content">
          <div className="row">
            {data.map(item => (
              <div className="col-lg-3" key={item.id}>
                <div className="product-card wow fadeInUp slow">
                  <div className="img img-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info pt-30">
                    <h6 className="fsz-16"> <a href="#"> {item.title} </a> </h6>
                    <p className="color-777"> {item.price} USD </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products