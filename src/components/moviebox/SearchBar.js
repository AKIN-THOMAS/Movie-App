import React, { useState } from "react";
import search from "../../assets/Search.svg";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  //   Handle input
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //   Handle Search
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          onSubmit={handleSearch}
          type="text"
          placeholder="What do you want to watch"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <img
        className="search-icon"
        onClick={handleSearch}
        src={search}
        alt="search icon"
      />
    </div>
  );
};

export default SearchBar;
