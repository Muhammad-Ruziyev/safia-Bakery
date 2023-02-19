import React, { useState } from "react";
// helpers
import { formatPrice } from "../../helper";
// import scss
import "./products.scss";
// import react-router-dom
import { Link } from "react-router-dom";

import { postCart, addToCart, openCart } from "../../Redux/Features/cartSlice";

// import redux
import { useDispatch } from "react-redux";
function Products({ el }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  return (
    <section className="col-lg-4 col-md-6 col-sm-12">
      <div className="Product">
        <div>
          <Link to={`/product/${el._id}`}>
            <img src={el.image} alt="" />
          </Link>
        </div>
        <div className="product-info">
          <h3 className="name">
            <Link className="name" to={`/product/${el._id}`}>
              {el.name}
            </Link>
          </h3>
          <p className="title">{el.title}</p>
          <div className="products-price">
            <p>{formatPrice(el.price)}</p>
            {token ? (
              <button
                onClick={() => dispatch(addToCart(el))}
                className="add-to-cart-btn"
              >
                Add
              </button>
            ) : (
              <Link to="/register">
                <button className="add-to-cart-btn">Add</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
