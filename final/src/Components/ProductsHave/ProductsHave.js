import React from "react";

// import scss
import "./Have.scss";

function ProductsHave(props) {
  return (
    <div className="col-6 col-md-3 col-sm-6">
      <div className="info">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default ProductsHave;
