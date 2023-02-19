import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import scss
import "./footer.scss";

function Footer() {
  return (
    <div className="bg">
      <div className="container footer">
        <div className="Footer-img">
          <img src="https://safiabakery.uz/img/girl.png" alt="" />
        </div>
        <ul className="footer-info d-flex justify-content-center">
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>
          <li>
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
          </li>
          <li>
            <Link className="nav-link">Public offer</Link>{" "}
          </li>
          <li>
            <Link className="nav-link">Career</Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
        <div className="d-flex footer-contacts">
          <li>
            <a target="_blank" href="https://www.facebook.com/Safia.uz">
              <img src="https://safiabakery.uz/img/ic_facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/safia_uz/">
              <img src="https://safiabakery.uz/img/ic_instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/safia_uzbot">
              <img src="https://safiabakery.uz/img/ic_telegram.png" alt="" />
            </a>
          </li>
        </div>
        <p>2022 Safia Cafe & Bakery. All rights reserved.</p>
        <p>
          Разработан в: <a href="/">Scooby company</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
