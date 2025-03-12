import React, { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("white");

  function changeColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  }

  return (
    <div style={{ background: bgColor, padding: "20px", textAlign: "center" }}>
      <h2>Random Color Generator 🎨</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
