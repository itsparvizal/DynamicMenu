import React, { useState } from "react";
import "./More.css"; // Import CSS for styling

function More({ Items, visibleItemsCount }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  console.log("Items:", Items);
  console.log("Items type:", typeof Items);
  return (
    <div className="more-container">
      <div className="more" onClick={() => setIsOpen(!isOpen)}>
        More
      </div>
      {isOpen && ( // Render the dropdown only if isOpen is true
        <div className="dropdown">
          {Items.slice(visibleItemsCount, Items.length).map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default More;
