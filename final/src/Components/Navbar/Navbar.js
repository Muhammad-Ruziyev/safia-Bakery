// import React Hooks
import React, { useState, useEffect } from "react";

// localStorage
import { clearLocalStorage } from "../../utils/localStorage";

// ruoter imports
import { Link, useNavigate } from "react-router-dom";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  isCartOpen,
  openCart,
  closeCart,
  postProductCart,
} from "../../Redux/Features/cartSlice";
import { authState } from "../../Redux/Features/authSlice";

// import icons
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

// import scss
import "./Navbar.scss";

function Navbar() {
  // hooks
  const [show, setShow] = useState(false);

  // localstorage || useNavigate
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  const Open = useSelector(isCartOpen);
  const auth = useSelector(authState);
  const cartProduct = useSelector(postProductCart);
  useEffect(() => {
    dispatch(openCart);
  }, []);
  //   functions
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-info main-container">
        <div onClick={handleShow}>
          {show ? (
            <li onClick={() => dispatch(closeCart)}>
              <button
                onClick={() => setShow(true)}
                className="mini-navbar-button"
              >
                <IoMdClose />
              </button>
            </li>
          ) : (
            <li onClick={() => dispatch(closeCart)}>
              <button
                onClick={() => setShow(false)}
                className="mini-navbar-button"
              >
                <AiOutlineMenu />
              </button>
            </li>
          )}
        </div>
        <div>
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="d-flex align-items-center"
          >
            <img src="https://safiabakery.uz/img/logo.svg" alt="" />
          </Link>
        </div>
        <div className="collapse">
          <ul className="ml-auto show">
            <li>
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">
                MENU
              </Link>
            </li>
            <li>
              <Link to="/news" className="nav-link">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/restaurants" className="nav-link">
                RESTAURANTS
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="nav-link">
                CONTACTS
              </Link>
            </li>
            <li className="">
              <Link className="nav-link contacts">
                <li>+998 99 363 83 07</li>
                <p>Daily from 8:00 to 23:00</p>
              </Link>
            </li>
            <li>
              <select className="language" name="language" id="language">
                <option className="nav-link" value="uzbek">
                  O'zbekcha
                </option>
                <option className="nav-link" value="russish">
                  Русский
                </option>
                <option className="nav-link" value="english">
                  English
                </option>
              </select>
            </li>
          </ul>
          <ul className="home ">
            <li>
              <Link to="/search" className="nav-link nav-icons">
                <AiOutlineSearch />
              </Link>
            </li>
            <li>
              {token ? (
                <Link
                  onClick={() => clearLocalStorage()}
                  className="nav-link nav-icons"
                >
                  <BiLogOut onClick={() => navigate("/")} />
                </Link>
              ) : (
                <Link to="/login" className="nav-link nav-icons">
                  <IoPersonOutline />
                </Link>
              )}
            </li>
            <li>
              {admin === "true" ? (
                <Link to="/admin/products" className="nav-link nav-icons">
                  <MdAdminPanelSettings />
                </Link>
              ) : null}
            </li>
            <li className="cart-icon" onClick={() => dispatch(openCart())}>
              <a className="product-length">{cartProduct.length}</a>
              <Link className="nav-link nav-icons">
                <BsCart2 />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {show ? (
        <div className="minibar">
          <ul className="ml-auto mini-nav-links">
            <li onClick={() => setShow(false)}>
              <Link to="/about" className="nav-link ">
                ABOUT
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/menu" className="nav-link">
                MENU
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/restaurants" className="nav-link">
                RESTAURANTS
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/contacts" className="nav-link">
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
