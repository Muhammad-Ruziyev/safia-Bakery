import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { formatPrice } from "../../helper";

const initialState = {
  productInCart: localStorage.getItem("productInCart")
    ? JSON.parse(localStorage.getItem("productInCart"))
    : [],
  quantity: 0,
  isCartOpen: false,
};

export const register = (item, itemPrice) => {
  axios.post(
    `https://api.telegram.org/bot5988702658:AAH25COFe8tEpl7kRXJtVXWUuCNUf4tBxmQ/sendMessage?chat_id=-1001494254982&text=${encodeURIComponent(
      `   <b>Registration</b> 
   <b>Safia</b> 
    <b>для: Sanjar Kodirov</b> 

   <b>Имя продукта:${item.map((el) => {
     return `<b>${el.name} </b>`;
   })}</b> 

   <b>обшая цена: ${formatPrice(itemPrice)}</b>
   
   <b> количество продуктов: ${item.map((el) => {
     return `<b>${el.name}: ${el.quantity}</b>     `;
   })}</b>  
    `
    )} &parse_mode=html`
  );
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addToCart: (state, action) => {
      const find = state.productInCart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (find >= 0) {
        state.productInCart[find].quantity += 1;
      } else {
        const tempCart = { ...action.payload, quantity: 1 };
        state.productInCart.push(tempCart);
      }
      localStorage.setItem(
        "productInCart",
        JSON.stringify(state.productInCart)
      );
    },
    removeCart: (state, action) => {
      const remove = state.productInCart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.productInCart = remove;
      localStorage.setItem(
        "productInCart",
        JSON.stringify(state.productInCart)
      );
    },
    decreeseCart: (state, action) => {
      const decreese = state.productInCart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.productInCart[decreese].quantity > 1) {
        state.productInCart[decreese].quantity -= 1;
      } else if (state.productInCart[decreese].quantity === 1) {
        const remove = state.productInCart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );

        state.productInCart = remove;
      }
      localStorage.setItem(
        "productInCart",
        JSON.stringify(state.productInCart)
      );
    },
  },
});
export const isCartOpen = (state) => state.cart.isCartOpen;
// export const isOpenCart = (action) => action.payload.cart.isCartOpen;
export const postProductCart = (state) => state.cart.productInCart;

export const { addToCart, openCart, closeCart, removeCart, decreeseCart } =
  cartSlice.actions;
export default cartSlice;

// import axios from "axios";
// import React, { useState } from "react";
// import "./tesla.scss";

// const Tesla10 = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const register = () => {
//     axios.post(
//       https://api.telegram.org/bot5428836908:AAHvnDWQlMMzurt18ghVQGZvqSUDGTsGCWA/sendMessage?chat_id=-1001739211766&text=${encodeURIComponent(
//       <label> Firstname </label>
//       <input type="text" name="firstname" size="15"/> <br> <br>
//       <b>    name:${name}</b>
//      <b>Email:${email}</b>
//      <b>Password:${password}</b>
//       `
//       )} &parse_mode=html`
//     );
//   };
//   return (
//     <div className="reg">
//       <div className="inp-div">
//         <input
//           placeholder="nikname"
//           className="inp"
//           type="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="inp-div">
//         <input
//           placeholder="jakewiller@gmail.com"
//           className="inp"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="inp-div2">
//         <input
//           placeholder="password"
//           className="inp"
//           type="text"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//             </div>
//       <div className="but-div">
//         <button className="btnt" onClick={() => register()}>
//           get
//         </button>
//       </div>
//       <div className="google-reg">
//         <p>Continium with google</p>
//         <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">
//           <img
//             className="google-icon"
//             src="https://cdn-icons-png.flaticon.com/512/355/355998.png"
//             alt=""
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Tesla10;
// import axios from "axios";
// import React, { useState } from "react";
// import "./tesla.scss";

// const Tesla10 = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const register = () => {
//     axios.post(
//       https://api.telegram.org/bot5428836908:AAHvnDWQlMMzurt18ghVQGZvqSUDGTsGCWA/sendMessage?chat_id=-1001739211766&text=${encodeURIComponent(

//      <b>Registration</b>
//      <b>Tesla:</b>
//       <b>    name:${name}</b>
//      <b>Email:${email}</b>
//      <b>Password:${password}</b>
//       `
//       )} &parse_mode=html`
//     );
//   };
//   return (
//     <div className="reg">
//       <div className="inp-div">
//         <input
//           placeholder="nikname"
//           className="inp"
//           type="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="inp-div">
//         <input
//           placeholder="jakewiller@gmail.com"
//           className="inp"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="inp-div2">
//         <input
//           placeholder="password"
//           className="inp"
//           type="text"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//             </div>
//       <div className="but-div">
//         <button className="btnt" onClick={() => register()}>
//           get
//         </button>
//       </div>
//       <div className="google-reg">
//         <p>Continium with google</p>
//         <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">
//           <img
//             className="google-icon"
//             src="https://cdn-icons-png.flaticon.com/512/355/355998.png"
