import React from "react";
import News from "./News.scss";

function NewsInfo({ el }) {
  return (
    <div className="col-lg-4">
      <div className="news">
        <img className="news-img" src={el.image} alt="" />
        <div className="news-info"></div>
      </div>
    </div>
  );
}

export default NewsInfo;
