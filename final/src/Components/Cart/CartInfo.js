import React from "react";
import { formatPrice } from "../../helper";
import { useDispatch } from "react-redux";
import {
  removeCart,
  decreeseCart,
  addToCart,
} from "../../Redux/Features/cartSlice";

function CartInfo({ el }) {
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeCart(cartItem));
  };
  const handleDecreese = (cartItem) => {
    dispatch(decreeseCart(cartItem));
  };
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  if (el) {
    return (
      <div className="cart-info">
        <img src={el.image} alt="" />
        <div className="cart-titles">
          <div className="cart-txt">
            <h3>{el.name}</h3>
            <h4>{formatPrice(el.price)} som</h4>
            <button onClick={() => handleRemove(el)} className="remove-btn">
              remove
            </button>
          </div>
          <div className="add-product">
            <button className="plusher" onClick={() => handleDecreese(el)}>
              -
            </button>
            <p>{el.quantity}</p>
            <button className="plusher" onClick={() => handleIncrease(el)}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartInfo;
