// import react and hooks
import React, { useState, useEffect } from "react";

// import scss
import "./pages.scss";

// import react-router-dom
import { Link } from "react-router-dom";

// import redux
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProduct, getAllData } from "../Redux/Features/productSlice";

// import components
import Products from "../Components/Products/Products";
import ProductsHave from "../Components/ProductsHave/ProductsHave";

function Home() {
  // hooks
  const [buttonChange, setButtonChange] = useState(0);
  const [tag, setTag] = useState("round-cakes");
  useEffect(() => {
    dispatch(getProduct(tag));
  }, [tag]);

  // redux
  const dispatch = useDispatch();
  const elements = useSelector(getAllData);
  const change = (index) => {
    setButtonChange(index);
  };
  return (
    <div>
      <div className="Main-page container">
        <div className="Main-page-titles">
          <h1 className="Main-title">Safia Confectionery House In Tashkent</h1>
          <h2 className="Main-title">Our Menu</h2>
        </div>
        <div className="row container">
          <div className="category-buttons">
            <div className="buttons-center">
              <ul className="row">
                <li
                  onClick={() => change(1)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 1 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("tartalets")}>delicous is here</a>
                </li>
                <li
                  onClick={() => change(2)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 2 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("premium-cakes")}>
                    sweets of proper nutriton
                  </a>
                </li>
                <li
                  onClick={() => change(3)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 3 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("animator")}>delivery by animator</a>
                </li>
                <li
                  onClick={() => change(4)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 4 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("premium-cakes")}>Premium-cakes</a>
                </li>
                <li
                  onClick={() => change(5)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 5 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("cakes")}>cakes</a>
                </li>
                <li
                  onClick={() => change(6)}
                  className={`col-lg-3 button-animation ${
                    buttonChange === 6 ? "white-btn" : "black-btn"
                  }`}
                >
                  <a onClick={() => setTag("store")}>safia store</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row all-products">
          {elements?.map((el) => {
            console.log(el);
            return <Products el={el} key={el._id} />;
          })}
        </div>
      </div>
      <section className="bg">
        <div className="container advantages">
          <div>
            <h2>Our advantages</h2>
            <h3>we create 1000 reasons for smile!</h3>
            <p>
              A great example of a successful family business. This is a place
              where confectionery excellence is distinguished not only by
              exceptional taste, but also a work of art. Every day,
              professionals in their field work on the creation of cakes and
              sweets to give your home a holiday!
            </p>
            <p>
              We invite you to experience true pleasure. And not only from the
              taste of our desserts, but also from exclusive dishes prepared by
              top-level chefs and, of course, unique drinks created by the best
              bartenders!
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row have">
          <ProductsHave
            title="best coffee"
            img="https://safiabakery.uz/img/a-1.jpg"
          />
          <ProductsHave
            title="large selection baking"
            img="https://safiabakery.uz/img/a-2.jpg"
          />
          <ProductsHave
            title="unforgetable Desserts"
            img="https://safiabakery.uz/img/a-3.jpg"
          />
          <ProductsHave
            title="delivery to any point of the city"
            img="https://safiabakery.uz/img/a-4.jpg"
          />
        </div>
      </section>
      <section className="bg">
        <div className="container about">
          <div className="about-title">
            <h2>About</h2>
            <p>
              Safia's pastry shop chain is a family business whose history began
              with amateur pastry chef Muhayo Ayupova. Her hard work and love of
              home baking prompted her to go beyond the family kitchen in 2001
              and start baking for sale, first for relatives, friends, and
              neighbors. Her husband, Akmal Ayupov, supports Muhayo's creative
              endeavors and organizes the finished products' delivery.
            </p>
            <p>
              In 2007, Mukhayo Ayupova's daughter, Madina Akmalovna, opened her
              first home bakery shop. She inspires by the family's successful
              experience and implements her ideas, recipes, and taste. Thanks to
              her culinary experience and pastry skills, the pastry shop's
              products have become what they are loved and known for: tasty,
              beautiful, and high quality.
            </p>
          </div>
          <div className="img-center">
            <img src="https://safiabakery.uz/img/about-icon.png" alt="" />
          </div>
        </div>
        <div className="container about-button">
          <button>
            <Link to="/about">More</Link>
          </button>
        </div>
      </section>
      <section>
        <div className="container contact">
          <h2>Contact us</h2>
          <div className="contact-info">
            <div className="contact-img">
              <img src="https://safiabakery.uz/img/envelop-icon.png" alt="" />
            </div>
            <div className="contact-title">
              <h3 className="text-right">
                Feel free to contact us anytime. <br /> We will get back to you
                as soon as we can.
              </h3>
              <div className="text-right">
                <div className="form-group">
                  <input className="nameInput" type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="tel " id="phone" placeholder="Phone number" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Message" />
                </div>
              </div>

              <div className="container about-button">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
