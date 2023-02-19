// import react and hooks
import React, { useEffect } from "react";

// import react-router-dom
import { useParams, useNavigate } from "react-router-dom";

// import redux
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  selectGetById,
  getSingleData,
  getSingleProduct,
} from "../Redux/Features/productSlice";
import { openCart } from "../Redux/Features/cartSlice";

// helpers
import { formatPrice } from "../helper";

function Details() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const Product = useSelector(getSingleData);
  const params = useParams();
  console.log(params.id);

  // hooks
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [params.id]);

  const el = Product;
  console.log(el);
  if (el === null) {
  }
  if (el) {
    return (
      <div className="contact">
        <div className="container">
          <div className="details">
            <img src={el.image} alt="" />
            <div className="details-info">
              <h1>{el.name}</h1>
              <h3>{el.peoples}</h3>
              <h4>{formatPrice(el.price)} som</h4>
              <p>{el.title}</p>
              <div className="add-button">
                <button onClick={() => dispatch(openCart())} className="button">
                  add to card
                </button>
                <h4 className="none-price">{formatPrice(el.price)} som</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
