// import react Hooks
import React, { useState, useEffect } from "react";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { getAllData, getProduct } from "../Redux/Features/productSlice";

// import components
import Products from "../Components/Products/Products";

function Menu() {
  // hooks
  const [cat, setCat] = useState(1);
  const [tag, setTag] = useState("round-cakes");
  useEffect(() => {
    dispatch(getProduct(tag));
  }, [tag]);
  // redux
  const dispatch = useDispatch();
  const elements = useSelector(getAllData);
  console.log(elements);

  // functions
  const changeCat = (change) => {
    setCat(change);
  };

  return (
    <section className="contact">
      <div className="container-fuild row Menu">
        <div className="categories col-md-3 col-sm-12">
          <h2>Menu</h2>
          <div className="bg all-category">
            <ul>
              <li className="Main-categories">
                {cat === 1 ? (
                  <div onClick={() => changeCat(0)}>
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Delicious is here
                    </a>
                  </div>
                ) : (
                  <div onClick={() => changeCat(1)}>
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Delicious is here
                    </a>
                  </div>
                )}

                <div className="">
                  <ul
                    className={`main-collapse ${
                      cat === 1
                        ? "add-sub-category torts-hg"
                        : "none-sub-category"
                    }`}
                  >
                    <li onClick={() => setTag("round-cakes")}>Round Cakes</li>
                    <li onClick={() => setTag("premium-cakes")}>
                      Premium Cake Collection
                    </li>
                    <li onClick={() => setTag("big-cakes")}>Big cakes</li>
                    <li onClick={() => setTag("cakes")}>Cakes</li>
                    <li onClick={() => setTag("macarons")}>Macarons</li>
                    <li>cookie</li>
                    <li>Cupcakes</li>
                    <li>Chak-Chak</li>
                    <li>Puff pastries</li>
                    <li>Meat pastries</li>
                    <li>Birthday Decor</li>
                  </ul>
                </div>
              </li>
              <li className="Main-categories">
                <a onClick={() => setTag("animator")} className="nav-link">
                  Delivery by animator
                </a>
              </li>
              <li className="Main-categories">
                <a onClick={() => setTag("store")} className="nav-link">
                  Safia Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Products col-md-9">
          <h2>Round Cakes</h2>
          <div className="searcher">
            <div className="search">
              <span className="search">
                <input
                  className="search-input"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </span>
            </div>
            <div className="search-button-div">
              <button className="search-button">Search</button>
            </div>
          </div>
          <hr />
          <div className="row">
            {elements?.map((el) => {
              return <Products el={el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
