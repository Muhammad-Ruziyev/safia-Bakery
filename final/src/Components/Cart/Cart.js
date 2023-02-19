// import react and hooks
import React, { useContext, useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { formatPrice } from "../../helper";

// import redux
import {
  openCart,
  isCartOpen,
  closeCart,
  addToCart,
  postProductCart,
} from "../../Redux/Features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Features/cartSlice";

// import components
import CartInfo from "./CartInfo";
import axios from "axios";

// import icons
import { IoMdClose } from "react-icons/io";

// import scss
import "./cart.scss";

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openCart);
  }, []);
  const [price, setPrice] = useState(0);
  const Open = useSelector(isCartOpen);
  const cartProducts = useSelector(postProductCart);
  function priceCard() {
    let prc = 0;
    cartProducts.map((info) => (prc += info.price));
    setPrice(prc);
  }
  useEffect(() => {
    priceCard();
  });

  return (
    <div className={`main-cart ${Open ? "Cart" : "none"} `}>
      <div className="cart-nav">
        <h3>Cart</h3>
        <button
          onClick={() => dispatch(closeCart())}
          className="cart-nav-close"
        >
          <IoMdClose />
        </button>
      </div>
      <hr />
      <div>
        {cartProducts?.map((el) => {
          return <CartInfo el={el} />;
        })}
      </div>
      {cartProducts.length > 0 ? (
        <div className="cart-abilities">
          <p>Total Price: {formatPrice(price)} som</p>
          <button
            className="order-btn"
            onClick={() => dispatch(register(cartProducts, price))}
          >
            Order
          </button>
        </div>
      ) : (
        <h1 className="empty">Cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
