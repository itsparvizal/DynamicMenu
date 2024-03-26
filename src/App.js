import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Carousel from "./components/Carousel";
import one from "./media/one.jpg";
import two from "./media/two.jpg";
import three from "./media/three.jpg";
import four from "./media/four.jpg";
import five from "./media/five.jpg";
import six from "./media/six.jpg";

function App() {
  const menuItems = [
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Furniture",
    "Travel",
    "Toys",
  ];

  const carouselItems = [
    { id: 1, title: "Item 1", image: one },
    { id: 2, title: "Item 2", image: two },
    { id: 3, title: "Item 3", image: three },
    { id: 4, title: "Item 4", image: four },
    {
      id: 5,
      title: "Item 5",
      image: five,
    },
    {
      id: 6,
      title: "Item 6",
      image: six,
    },
  ];

  return (
    <div className="App">
      <Navbar items={menuItems} />
      <Carousel images={carouselItems} />
    </div>
  );
}

export default App;
