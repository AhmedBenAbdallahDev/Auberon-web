"use client";
import React from 'react';
//= Components
import ProductInfo from './ProductInfo';

function Single() {
  function increaseQty(event) {
    const qtyElement = event.currentTarget.parentElement.querySelector('.qt');
    const value = +qtyElement.innerHTML;

    qtyElement.innerHTML = value + 1;
  }

  function decreaseQty(event) {
    const qtyElement = event.currentTarget.parentElement.querySelector('.qt');
    const value = +qtyElement.innerHTML;

    if (value - 1 > 0) qtyElement.innerHTML = value - 1;
  }

  return (
    <section className="tc-product-single-style1">
      <div className="main-info mb-100">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-5">
              <div className="product-img mb-4 mb-lg-0">
                <img src="/inner_pages/assets/img/products/prod1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="product-info">
                <div className="fsz-14 color-777 mb-1">
                  <div className="stars color-blue1 d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <span> 10 Reviews </span>
                </div>
                <h3 className="fsz-26 fw-bold text-capitalize mb-30"> Kyuzo Vide Poche Pair Chair </h3>
                <div className="text fsz-16 color-777 mb-30">
                  Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a completely modern design and you feel comfortable to put on this hijab. Buy it at the best price.
                </div>
                <div className="btns mb-60">
                  <div className="add-more">
                    <span className="qt-minus" onClick={decreaseQty}><i className="fas fa-minus"></i></span>
                    <span className="qt">1</span>
                    <span className="qt-plus" onClick={increaseQty}><i className="fas fa-plus"></i></span>
                  </div>
                  <a href="#" className="add-btn"> <i className="fal fa-shopping-basket"></i> Add To Cart </a>
                  <a href="#" className="fav-btn"> <i className="fas fa-heart"></i> </a>
                </div>
                <div className="sub-info lh-7 fsz-16">
                  <ul>
                    <li>
                      <strong> SKU: </strong>
                      <div className="color-777 d-inline-block"> BO1D0MX8SJ </div>
                    </li>
                    <li>
                      <strong> Categories: </strong>
                      <div className="color-777 d-inline-block">
                        <a href="#"> Wood, </a>
                        <a href="#"> Chair, </a>
                        <a href="#"> Furniture </a>
                      </div>
                    </li>
                    <li>
                      <strong> Tags: </strong>
                      <div className="color-777 d-inline-block">
                        <a href="#"> Wood, </a>
                        <a href="#"> Chair, </a>
                        <a href="#"> Furniture </a>
                      </div>
                    </li>
                  </ul>
                  <div className="share mt-3 fsz-16">
                    <strong className="text-uppercase"> Share: </strong>
                    <div className="color-777 d-inline-block">
                      <a href="#" className="hover-blue1 me-2"> <i className="fab fa-facebook-f"></i> </a>
                      <a href="#" className="hover-blue1 me-2"> <i className="fab fa-twitter"></i> </a>
                      <a href="#" className="hover-blue1 me-2"> <i className="fab fa-behance"></i> </a>
                      <a href="#" className="hover-blue1 me-2"> <i className="fab fa-youtube"></i> </a>
                      <a href="#" className="hover-blue1 me-2"> <i className="fab fa-linkedin-in"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductInfo />
    </section>
  )
}

export default Single