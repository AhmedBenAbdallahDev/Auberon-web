"use client";
import React from 'react';

function Wishlist() {
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
    <section className="tc-wishlist-style1">
      <div className="container">
        <div className="wishlist-table">
          <div className="table-head">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="t-title"> Products </h6>
              </div>
              <div className="col-lg-2 col-4">
                <h6 className="t-title"> Price </h6>
              </div>
              <div className="col-lg-2 col-4">
                <h6 className="t-title"> Quantity </h6>
              </div>
              <div className="col-lg-2 col-4">
                <h6 className="t-title"> Subtotal </h6>
              </div>
            </div>
          </div>
          <div className="table-body">
            <div className="table-row">
              <span className="cls"> <i className="far fa-times"></i> </span>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="prod">
                    <img src="/inner_pages/assets/img/products/prod1.jpg" alt="" />
                    <p> Asto Hill Minimal Furniture </p>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16"> $101.00 </p>
                </div>
                <div className="col-lg-2 col-4">
                  <div className="add-more">
                    <span className="qt-minus" onClick={decreaseQty}><i className="fas fa-minus"></i></span>
                    <span className="qt">1</span>
                    <span className="qt-plus" onClick={increaseQty}><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16 fw-bold"> $101.00 </p>
                </div>
              </div>
            </div>
            <div className="table-row">
              <span className="cls"> <i className="far fa-times"></i> </span>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="prod">
                    <img src="/inner_pages/assets/img/products/prod2.jpg" alt="" />
                    <p> Asto Hill Minimal Furniture </p>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16"> $101.00 </p>
                </div>
                <div className="col-lg-2 col-4">
                  <div className="add-more">
                    <span className="qt-minus" onClick={decreaseQty}><i className="fas fa-minus"></i></span>
                    <span className="qt">1</span>
                    <span className="qt-plus" onClick={increaseQty}><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16 fw-bold"> $101.00 </p>
                </div>
              </div>
            </div>
            <div className="table-row">
              <span className="cls"> <i className="far fa-times"></i> </span>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="prod">
                    <img src="/inner_pages/assets/img/products/prod3.jpg" alt="" />
                    <p> Asto Hill Minimal Furniture </p>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16"> $101.00 </p>
                </div>
                <div className="col-lg-2 col-4">
                  <div className="add-more">
                    <span className="qt-minus" onClick={decreaseQty}><i className="fas fa-minus"></i></span>
                    <span className="qt">1</span>
                    <span className="qt-plus" onClick={increaseQty}><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="col-lg-2 col-4">
                  <p className="color-blue1 fsz-16 fw-bold"> $101.00 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="table-foot">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="copon">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit"> APPLY COUPON </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="total-card mt-4 mt-lg-0">
                  <h3 className="fsz-26 fw-bold mb-20"> Cart Total </h3>
                  <ul>
                    <li> <strong> Subtotal </strong> <span> $230.00 </span> </li>
                    <li> <strong className="fw-400"> Shipping Cost </strong> <span> $50.00 </span> </li>
                    <li> <strong> Total </strong> <span className="fw-bold"> $280.00 </span> </li>
                  </ul>
                  <div className="button_su border-0 w-100 mt-20 text-center">
                    <span className="su_button_circle bg-000 desplode-circle"></span>
                    <a href="#" className="butn text-uppercase border-0 button_su_inner bg-blue1 py-3 px-5 w-100">
                      <span className="button_text_container fsz-16 text-white"> procced To Checkout </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wishlist