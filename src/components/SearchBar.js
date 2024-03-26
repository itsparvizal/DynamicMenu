import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Perform search with:", searchTerm);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search something..."
        className="searchinput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
