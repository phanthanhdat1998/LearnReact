import React, { useState } from "react";
import "./Colorbox.scss";

const getRamdomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};
const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });
  const handleBoxClick = () => {
    const newColor = getRamdomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
};

export default ColorBox;
