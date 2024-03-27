import React from "react";

function More({ Items, visibleItemsCount }) {
  return (
    visibleItemsCount < Items.length && (
      <div className="more">
        {Items.slice(visibleItemsCount, Items.length).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    )
  );
}
export default More;
