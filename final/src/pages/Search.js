import React from "react";

function Search() {
  return (
    <div className="Search-info contact container">
      <h2 className="search-title">Search</h2>
      <div className="searcher ">
        <div className="search">
          <span className="search">
            <input
              className="search-input"
              type="text"
              placeholder="What are you looking for?"
            />
          </span>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default Search;
