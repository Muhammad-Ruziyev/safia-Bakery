import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";
import {
  getProduct,
  getAllData,
  getSingleProduct,
} from "./Redux/Features/productSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(getProduct());

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
