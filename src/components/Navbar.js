import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Items from "./Items";
import Logo from "./Logo";

function Navbar({ items }) {
  return (
    <div className="navbar">
      <Logo className="logo" />
      <Items items={items} />
      <SearchBar className="search" />
    </div>
  );
}

export default Navbar;
