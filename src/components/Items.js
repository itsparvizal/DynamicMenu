// Items.js
import React, { useState, useEffect } from "react";
import "./Items.css";

function Items({ items }) {
  const [visibleItemsCount, setVisibleItemsCount] = useState(
    getVisibleItemsCount()
  );
  useEffect(() => {
    const handleResize = () => {
      setVisibleItemsCount(getVisibleItemsCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getVisibleItemsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1820) {
      return 10;
    } else if (screenWidth >= 1600) {
      return 8;
    } else if (screenWidth >= 1500) {
      return 7;
    } else if (screenWidth >= 1400) {
      return 6;
    } else if (screenWidth >= 1300) {
      return 5;
    } else if (screenWidth >= 1200) {
      return 4;
    } else if (screenWidth >= 1050) {
      return 3;
    } else if (screenWidth >= 970) {
      return 2;
    } else {
      return 0;
    }
  }

  return (
    <div
      className="items"
      style={{ "--visible-items-count": visibleItemsCount }}
    >
      {items.slice(0, visibleItemsCount).map((item, index) => (
        <div className="buttons" key={index}>
          {item}
        </div>
      ))}
      <div className="more">More</div>
    </div>
  );
}

export default Items;
